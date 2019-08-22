import React, {useEffect} from "react";
import { connect } from 'react-redux'
import House from "./../house";
import PropTypes from "prop-types";
import accordion from "../../decorators/accordion";
import {fetchHouses, nextPage, prevPage} from "../../ac"
import {
  housesListSelector,
  housesLoadingSelector
} from "../../selectors";
import { NavLink } from "react-router-dom";
import Loader from "../loader";

const getPageUrl = (currentPageNumber, step) => {
  let pageNumber = +currentPageNumber + step;
  pageNumber = pageNumber > 0 ? pageNumber : 1;

  return `/houses/${pageNumber}`;
}

function HouseList({ houses, isOpen, isLoading, setOpenId, match, fetchHouses }){
  useEffect(() => {
    fetchHouses(match.params.page);
  }, [match.params.page]);

  if (isLoading) return <Loader />;
  
    return (
      <div>
        {houses.map((house, i) => (
          <House
            key={i}
            house={house}
            isOpen={isOpen(i)}
            onClick={setOpenId(i)}
          />
        ))}
        <div>
          <NavLink to={getPageUrl(match.params.page, -1)}>PREV</NavLink>
          <span> {match.params.page} </span>
          <NavLink to={getPageUrl(match.params.page, 1)}>NEXT</NavLink>
        </div>
      </div>
    );
  }

  HouseList.propTypes = {
    houses: PropTypes.arrayOf(PropTypes.object),
    isOpen: PropTypes.func,
    isLoading: PropTypes.bool,
    setOpenId: PropTypes.func,
    fetchHouses: PropTypes.func,
    match: PropTypes.object
  };

export default connect(
  state => ({
    houses: housesListSelector(state),
    isLoading: housesLoadingSelector(state),
    page: state.page
  }),
  { fetchHouses, prevPage, nextPage }
)(accordion(HouseList));
