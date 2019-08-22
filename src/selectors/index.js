import { createSelector } from "reselect";

export const housesSelector = state => state.houses.entities;
export const housesListSelector = createSelector(
  housesSelector,
  houses => houses.valueSeq().toArray()
);
export const housesLoadingSelector = state => state.houses.isLoading;

export const peopleSelector = state => state.people;
export const peopleListSelector = createSelector(
  peopleSelector,
  people => people.valueSeq().toArray()
);

export const personSelector = ({ people }, { id, match }) => id ? people.get(id) : people.get(match.params.id);
