import { useState } from "react";

export default (defaultValue = "") => {
  const [state, setState] = useState(defaultValue);

  const handleChange = ev => setState(ev.target.value);

  return [state, handleChange];
};
