import React, { VFC } from "react";

const IndexPage: VFC = () => (
  <div>
    <h1>index page</h1>
    <p>This page is root page. And this page is processed SSR.</p>
  </div>
);

const IndexPageElem = (
  <>
    <IndexPage />
  </>
);
export default IndexPageElem;
