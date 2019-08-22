import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {fetchPeople} from "../../ac"
import {
  peopleListSelector
} from "../../selectors";
import PersonItem from "../person-item";
import Loader from "../loader";

function House({ house, isOpen, onClick, people, fetchPeople }){
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      const tasks = house.swornMemberIds.map(id => {
        if (people.every( p=> p.id != id)) {
          return fetchPeople(id);
        }
      });

      Promise.all(tasks).then(() => setLoading(false));
    }
  }, [isOpen]);

    const body = isOpen && (
      <section>
        <p>Words: {house.words}</p>
        <p>Members:</p>
        {house.swornMemberIds.map(personId => (
          <PersonItem id={personId} key={personId} />
        ))}
      </section>
    );

    return (
      <div>
        <h3 onClick={onClick}>{house.name}</h3>
        {isLoading ?  <Loader /> : body}
      </div>
    );
  }

House.propTypes = {
  house: PropTypes.shape({
    swornMemberIds: PropTypes.arrayOf(PropTypes.string),
    words: PropTypes.string
  }),
  isOpen: PropTypes.bool,
  people: PropTypes.arrayOf(PropTypes.object),
  fetchPeople: PropTypes.func,
};

export default connect(
  state => ({people: peopleListSelector(state)}),
 { fetchPeople }
)(House);
