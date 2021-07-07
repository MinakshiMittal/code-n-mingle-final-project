import { createContext, useContext, useReducer } from "react";
import { projectReducer } from "../Reducer";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, {
    availableProjects: [],
    
  });

  return (
    <ProjectContext.Provider
      value={{
        availableProjects: state.availableProjects,
        dispatch,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  return useContext(ProjectContext);
};
