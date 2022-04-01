import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount as AuthMount } from "auth/AuthApp";

export const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = AuthMount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};