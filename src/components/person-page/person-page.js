import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { personSelector } from "../../selectors";
import { connect } from "react-redux";
import { fetchPeople } from "../../ac";
import Loader from "../loader";

function PersonPage({ person, match, fetchPeople }){
  const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      if (!person) {
        setLoading(true)
        fetchPeople(match.params.id).then(() => setLoading(false));
      }
    }, [person]);

    if (isLoading) return <Loader />;

    return person ? <React.Fragment>
      <p><b>Name: </b> {person.name}</p>
      <p><b>Gender: </b>{person.gender}</p>
      <p><b>Culture: </b>{person.culture}</p>
      <p><b>Titles: </b>{person.titles.join(", ")}</p>
    </React.Fragment> : <div/>
  }

 PersonPage.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    culture: PropTypes.string,
    titles: PropTypes.arrayOf(PropTypes.string)
  }),
  match: PropTypes.object,
  fetchPeople: PropTypes.func,
};

export default connect(
  (state, ownProps) => ({
    person: personSelector(state, ownProps)
  }),
  { fetchPeople }
)(PersonPage);
