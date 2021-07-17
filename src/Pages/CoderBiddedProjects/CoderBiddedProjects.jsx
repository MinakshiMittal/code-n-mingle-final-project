import axios from "axios";
import { useEffect, useState } from "react";
import {
  CoderDashBoardSideNav,
  CoderMainNav,
  BiddedProjectCard,
} from "../../Components";
import { useCoderAuth } from "../../Context";
import "./CoderBiddedProjects.css";

export const CoderBiddedProjects = () => {
  const { token } = useCoderAuth();
  const [biddedProjects, setBiddedProjects] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          "https://code-n-mingle-backend.mittalminakshi.repl.co/buyer-projects/bidded-projects",
          {
            headers: { authorization: token },
          }
        );

        if (status === 200) {
          setBiddedProjects(data.allBidsPopulated.bidsList);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  });

  return (
    <>
      <CoderMainNav />
      <div className="coder-dashboard">
        <CoderDashBoardSideNav />
        <div className="all-bidded-projects-container">
          {biddedProjects?.map((biddedProject) => {
            return <BiddedProjectCard biddedProject={biddedProject} />;
          })}
        </div>
      </div>
    </>
  );
};
