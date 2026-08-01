import { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginsRegistered = false;

if (typeof window !== "undefined" && !pluginsRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export { gsap, ScrollTrigger };

export function createGSAPContext(
  scope: RefObject<Element | null>,
  callback: () => void
) {
  const ctx = gsap.context(callback, scope);

  return () => {
    ctx.revert();
  };
}

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}

export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}