import React from "react";

export interface CarouselHeaderInterface {
  id: number;
  name: string;
}

export interface DataInterface {
  [key: number]: {
    description: string;
    technologies: string[];
  };
}

export interface CarouselImageInterface {
  id: number;
  name: string;
  src: string;
}

type Image = {
  name: string;
  src: string;
};

type ProjectDetails = {
  objective: string | React.ReactNode;
  href: string;
  moreImages: Image[];
};

export interface ProjectInterface {
  id: number;
  name: string;
  img: string;
  description: string;
  technologies: string[];
  details: ProjectDetails;
}
