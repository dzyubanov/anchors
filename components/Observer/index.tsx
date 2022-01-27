import React, { useEffect, useRef } from "react";
import useIntersectionObserver from "../../helpers/useIntersectionObserver";

import { OberserverProps } from "./interfaces";

const Observer: React.FC<OberserverProps> = ({
  children,
  onVisible,
  className,
  threshold,
  root,
  rootMargin,
  freezeOnceVisible,
  onInvisible,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {
    threshold,
    root,
    rootMargin,
    freezeOnceVisible,
  });
  const isVisible = !!entry?.isIntersecting;
  useEffect(() => {
    if (isVisible) {
      onVisible();
    } else {
      onInvisible && onInvisible();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div ref={ref} className={className} style={{ margin: "0", padding: "0" }}>
      {children}
    </div>
  );
};

export default Observer;
