import { useEffect, useState } from "react";
import axios from "axios";
import { AvailableProjectCard } from "../../Components";
import "./CategoryWiseAvailableProjectsListingPage.css";
import { useParams } from "react-router-dom";

export const CategoryWiseAvailableProjectsListingPage = () => {
  const { categoryId } = useParams();

  const [categoryWiseAvailableProjects, setCategoryWiseAvailableProjects] =
    useState(null);

  useEffect(
    () =>
      setTimeout(() => {
        (async () => {
          try {
            const { data, status } = await axios.get(
              `https://code-n-mingle-backend.mittalminakshi.repl.co/categories/${categoryId}`
            );
            console.log(data.projects, status);

            if (status === 200) {
              setCategoryWiseAvailableProjects(data.projects);
            }
          } catch (error) {
            console.error(error);
          }
        })();
      }, 1000),
    [categoryId]
  );

  return (
    <div className="available-projects-container">
      {categoryWiseAvailableProjects?.map((availableProject) => {
        return <AvailableProjectCard availableProject={availableProject} />;
      })}
    </div>
  );
};
