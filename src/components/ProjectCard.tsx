import * as React from "react";
import { ProjectCardProps } from "../types/types";

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, imageAlt }) => (
  <div
    className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
  >
    <div className="relative pt-[137%]">
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
);

export default ProjectCard;
