import { RefObject } from "react";

export interface Section {
    name: string;
    ref: RefObject<HTMLElement> | undefined;
}

export interface Experience {
  company: string;
  title: string;
  description: string;
  workdetails: string[];
  period: string;
  stacks: string[];
  image: string[];
}
