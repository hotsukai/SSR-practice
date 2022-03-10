import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import PageWrapper from "./PageWrapper";

const App: VFC<{ serverData?: any }> = ({ serverData = null }) => {
  return (
    <Routes>
      {Object.keys(routes).map((key) => {
        const { path, component: C } = routes[key];
        return (
          <Route
            key={path}
            path={path}
            element={
              <PageWrapper
                key={path}
                PageComponent={C}
                serverData={serverData}
              />
            }
          />
        );
      })}
    </Routes>
  );
};

export default App;
