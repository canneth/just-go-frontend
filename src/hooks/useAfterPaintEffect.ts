import { useEffect } from "react";

export default function useAfterPaintEffect(effect: Function, dependencies: Array<unknown>) {
  /*
    DESCRIPTION:
      Same signature as useEffect.
      Used like useEffect, but guarantees that the effect function is called AFTER a repaint is completed.

      useEffect will run after a repaint is triggered, but NOT NECESSARILY COMPLETED.
      As such, when a repaint is triggered, we requestAnimationFrame to register a callback to be run
      BEFORE the next repaint. In this callback, we use setTimeout with a timeout of 0s and pass our
      effect function as the callback to ensure that it is called AFTER that repaint is completed.

      See this discussion for more info: https://github.com/facebook/react/issues/20863
  */

  useEffect(() => {
    requestAnimationFrame(() => {
      setTimeout(effect, 0);
    });
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps
}