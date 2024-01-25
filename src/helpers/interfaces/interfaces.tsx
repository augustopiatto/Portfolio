import React from "react";

export interface CarouselHeaderInterface {
  id: number;
  name: string;
}

export interface CarouselImageInterface {
  id: number;
  name: string;
  src: string;
}

type Image = {
  id: number;
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
