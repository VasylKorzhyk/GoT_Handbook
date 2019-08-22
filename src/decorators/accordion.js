import React from "react";
import { useAccordion } from "../hooks/accordion";

//decorator === HOC === Higher Order Component

export default OriginalComponent =>
  function DecoratedComponent(props) {
    const { isOpen, setOpenId } = useAccordion(props.defaultOpenId);
    return (
      <OriginalComponent {...props} isOpen={isOpen} setOpenId={setOpenId} />
    );
  };
