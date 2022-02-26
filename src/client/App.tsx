import React, { VFC } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";

export const buildTopPath = () => `/ssr`;
export const buildDetailPath = (id: string) => `/ssr/${id}`;

const App: VFC<{ serverData?: any }> = ({ serverData = null }) => {
  return (
    <Routes>
      {routes.map((route) => {
        const { path, fetchInitData, component: C } = route;
        return (
          <Route
            key={path}
            path={path}
            element={<C data={serverData} fetchInitData={fetchInitData} />}
          />
        );
      })}
    </Routes>
  );
};

export default App;
