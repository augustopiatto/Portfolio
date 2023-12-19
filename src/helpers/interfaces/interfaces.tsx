export interface CarouselHeaderInterface {
  [key: number]: string;
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
