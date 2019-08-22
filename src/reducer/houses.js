import { Record } from "immutable";
import {
  ERROR,
  FETCH_HOUSES,
  START,
  SUCCESS
} from "../constants";
import { arrToMap } from "../utils";

const HouseModel = Record({
  name: "",
  words: "",
  swornMembers: [],
  swornMemberIds: []
});

const ReducerModel = Record({
  entities: arrToMap([], HouseModel),
  isLoading: false
});

export default (houses = new ReducerModel(), action) => {
  const { type, payload, id, response, error } = action;

  switch (type) {
    case FETCH_HOUSES + START:
      return houses.set("isLoading", true);

    case FETCH_HOUSES + ERROR:
      return houses
        .set("isLoading", false);

    case FETCH_HOUSES + SUCCESS:
      return houses
        .set("entities", arrToMap(response, HouseModel))
        .set("isLoading", false);

    default:
      return houses;
  }
};
