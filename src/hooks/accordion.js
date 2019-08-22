import { useState, useCallback } from "react";

export function useAccordion(defaultOpenId) {
  const [openItemId, setOpenItemId] = useState(defaultOpenId);

  const isOpen = useCallback(id => id === openItemId, [openItemId]);
  const setOpenId = useCallback(
    id => () => setOpenItemId(id === openItemId ? null : id),
    [setOpenItemId, openItemId]
  );

  return { isOpen, setOpenId };
}
