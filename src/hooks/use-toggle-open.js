import { useState } from "react";

export default defaultOpen => {
  const [isOpen, setOpen] = useState(defaultOpen);

  const toggleOpen = () => setOpen(!isOpen);

  return { isOpen, toggleOpen };
};
