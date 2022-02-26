import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";
import PageWrapper from "./PageWrapper";

export const buildTopPath = () => `/ssr`;
export const buildDetailPath = (id: string) => `/ssr/${id}`;

const App: VFC<{ serverData?: any }> = ({ serverData = null }) => {
  return (
    <Routes>
      {routes.map((route) => {
        const {
          path,
          fetchInitDataOnBrowser: fetchInitData,
          component: C,
        } = route;
        return (
          <Route
            key={path}
            path={path}
            element={
              <PageWrapper
                key={path}
                PageComponent={C}
                fetchInitData={fetchInitData}
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
