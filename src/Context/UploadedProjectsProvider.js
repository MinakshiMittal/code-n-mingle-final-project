import axios from "axios";
import { useContext, createContext, useState } from "react";
// import { useCoderAuth } from "./CoderAuthProvider";

export const UploadedProjectsContext = createContext();

export const UploadedProjectsProvider = ({ children }) => {
  const [uploadedProjects, setUploadedProjects] = useState(null);
  //   const { coderDetails } = useCoderAuth();

  //   useEffect(() =>
  //     (async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://code-n-mingle-backend.mittalminakshi.repl.co/coder/uploaded-projects/${coderDetails}`
  //         );

  //         if (response.status === 200) {
  //           setUploadedProjects(response.data.uploadedProjects);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //     [])()
  //   );
  return (
    <UploadedProjectsContext.Provider
      value={{ uploadedProjects, setUploadedProjects }}
    >
      {children}
    </UploadedProjectsContext.Provider>
  );
};

export const useUploadedProjects = () => {
  return useContext(UploadedProjectsContext);
};
