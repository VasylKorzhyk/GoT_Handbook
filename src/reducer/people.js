import { Record } from "immutable";
import { FETCH_PEOPLE, SUCCESS } from "../constants";
import { arrToMap } from "../utils";

const PeopletModel = Record({
  id: null,
  name: null,
  url: null,
  gender: null,
  title: null,
  titles: []
});

const defaultPeople = arrToMap([], PeopletModel)

export default (people = defaultPeople, action) => {
  const { type, response, id } = action;
  
  switch (type) {
    case FETCH_PEOPLE + SUCCESS:
        return people.set(id, new PeopletModel({...response, id}));

    default:
      return people;
  }
};
