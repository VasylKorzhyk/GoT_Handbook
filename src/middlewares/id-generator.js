import uuid from "uuid";

export default store => next => action => {
  const { generateId, ...rest } = action;
  if (!generateId) return next(action);

  const id = uuid();

  next({
    ...rest,
    id
  });
};
