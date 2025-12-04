import { RefObject } from "react";

export interface Section {
  name: string;
  ref: RefObject<HTMLElement | null> | null;
}

export interface Experience {
  company: string;
  title: string;
  description: string;
  workdetails: string[];
  period: string;
  stacks: string[];
  images: string[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  stacks: string[];
}