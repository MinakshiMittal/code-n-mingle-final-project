import { useEffect, useState } from "react";
import axios from "axios";
import { AvailableProjectCard, MainNav } from "../../Components";
import "./AvailableProjectsListingPage.css";

export const AvailableProjectsListingPage = () => {
  const [availableProjects, setAvailableProjects] = useState(null);

  useEffect(
    () =>
      // setTimeout(() => {
      (async () => {
        try {
          const { data, status } = await axios.get(
            "https://code-n-mingle-backend.mittalminakshi.repl.co/available-projects"
          );
          console.log(data.availableProjects, status);

          if (status === 200) {
            setAvailableProjects(data.availableProjects);
          }
        } catch (error) {
          console.error(error);
        }
      })(),
    // }, 1000),
    []
  );

  return (
    <>
      <MainNav />
      <div className="available-projects-container">
        {availableProjects?.map((availableProject) => {
          return <AvailableProjectCard availableProject={availableProject} />;
        })}
      </div>
    </>
  );
};
