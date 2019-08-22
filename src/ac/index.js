import {
  ERROR,
  START,
  SUCCESS,
  FETCH_HOUSES,
  FETCH_PEOPLE,
  NEXT_PAGE,
  PREV_PAGE
} from "../constants";
import { push } from "connected-react-router";

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const prevPage = () => ({
  type: PREV_PAGE
});

export const fetchHouses = (pageNumber) => async dispatch => {
  dispatch({
    type: FETCH_HOUSES + START
  });

  try {
    const res = await fetch(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=10`);
    const response = await res.json();

    const houses = response.map(house => {
      const swornMemberIds = [];
      house.swornMembers.forEach(async url => {
        swornMemberIds.push(url.split("/").pop());
      });

      return {...house, swornMemberIds};
    });

    dispatch({
      response: houses,
      type: FETCH_HOUSES + SUCCESS,
      generateId: true
    });
  } catch (error) {
    dispatch({
      error,
      type: FETCH_HOUSES + ERROR
    });

    dispatch(push("/error"));
  }
};

export const fetchPeople = id => async dispatch => {
  dispatch({
    type: FETCH_PEOPLE + START
  });

  try {
    const res = await fetch(`https://www.anapioficeandfire.com/api/characters/${id}`);
    const response = await res.json();

    dispatch({
      response,
      type: FETCH_PEOPLE + SUCCESS,
      id: id
    });
  } catch (error) {
    dispatch({
      error,
      type: FETCH_PEOPLE + ERROR
    });

    dispatch(push("/error"));
  }
};