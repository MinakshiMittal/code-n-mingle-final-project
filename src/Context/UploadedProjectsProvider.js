import { useContext, createContext, useState } from "react";

export const UploadedProjectsContext = createContext();

export const UploadedProjectsProvider = ({ children }) => {
  const [uploadedProjects, setUploadedProjects] = useState(null);
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
