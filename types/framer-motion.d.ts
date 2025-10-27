declare module "framer-motion" {
  import * as React from "react";

  type MotionComponent<P> = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<P> & React.RefAttributes<Element>
  >;

  type Motion = {
    [K in keyof JSX.IntrinsicElements]: MotionComponent<JSX.IntrinsicElements[K]>;
  };

  export const motion: Motion;
  export function useReducedMotion(): boolean;
}
