import axios from "axios";
import { useEffect, useState } from "react";
import {
  CoderDashBoardSideNav,
  BuyerMainNav,
  BiddedProjectCard,
} from "../../Components";
import "./BuyerBiddedProjects.css";

export const BuyerBiddedProjects = () => {
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlcklkIjoiNjBlZGNiZTY4YjkxZDYwMDI1OGI1ZDY5IiwiaWF0IjoxNjI2NTA3MTM4LCJleHAiOjE2MjY1OTM1Mzh9.nxbiOHRLC9foUlpIpceLBEx3TgiNHZtL4TGWDLOOsyo";
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
      <BuyerMainNav />
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
