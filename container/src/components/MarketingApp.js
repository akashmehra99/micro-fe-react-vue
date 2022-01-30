import React, { useRef, useEffect } from "react";

import { mount as MarketingMount } from "marketing/MarketingApp";

export const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    MarketingMount(ref.current);
  });

  return <div ref={ref} />;
};
