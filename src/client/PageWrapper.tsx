import axios from "axios";
import React, { useEffect, useRef, useState, VFC } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  serverData?: any;
  PageComponent: VFC<{ data?: any; isLoading: boolean }>;
};
const PageWrapper: VFC<Props> = ({ serverData, PageComponent }) => {
  const [data, setData] = useState(() => {
    if (typeof document !== "undefined") {
      const dataPool = (document.getElementById("root") as HTMLElement).dataset
        .react;
      const unsafeData = dataPool ? JSON.parse(dataPool) : null;
      (document.getElementById("root") as HTMLElement).dataset.react = "";
      return unsafeData;
    } else {
      return serverData; // SSRしてる時
    }
  });

  const [isLoading, setIsLoading] = useState(data ? false : true);

  const { pathname } = useLocation();
  const shouldFetch = useRef(!data);

  useEffect(() => {
    if (shouldFetch.current) {
      const f = async () => {
        setIsLoading(true);
        const result = await axios
          .get(`/api${window.location.pathname}`)
          .then((data) => data.data)
          .catch((error) => {
            console.warn(error);
            return null;
          });
        setData(result);
        setIsLoading(false);
        shouldFetch.current = false;
      };
      f();
    } else {
      shouldFetch.current = true;
    }
  }, [pathname, shouldFetch]);

  return <PageComponent data={data} isLoading={isLoading} />;
};

export default PageWrapper;
