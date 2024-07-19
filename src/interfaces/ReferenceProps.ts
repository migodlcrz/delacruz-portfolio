import { RefObject } from "react";

export interface HomeProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  servicesRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
}

export interface HeaderProps {
  homeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  servicesRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
}
