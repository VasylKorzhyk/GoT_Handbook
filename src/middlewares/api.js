import { ERROR, START, SUCCESS } from "../constants";

export default store => next => async action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action);

  store.dispatch({
    ...rest,
    type: type + START
  });

  try {
    const res = await fetch(callAPI);
    const response = await res.json();

    store.dispatch({
      ...rest,
      response,
      type: type + SUCCESS
    });
  } catch (error) {
    store.dispatch({
      ...rest,
      error,
      type: type + ERROR
    });
  }
};
