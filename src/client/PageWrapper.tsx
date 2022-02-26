import React, { useEffect, useRef, useState, VFC } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  serverData?: any;
  fetchInitData: (pathname?: string) => any;
  PageComponent: VFC<{ data?: any; isLoading: boolean }>;
};
const PageWrapper: VFC<Props> = ({
  serverData,
  fetchInitData,
  PageComponent,
}) => {
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
  console.log(JSON.stringify(serverData), JSON.stringify(data));

  const [isLoading, setIsLoading] = useState(data ? false : true);

  const { pathname } = useLocation();
  const shouldFetch = useRef(!data);

  useEffect(() => {
    if (shouldFetch.current) {
      const f = async () => {
        setIsLoading(true);
        const result = await fetchInitData(pathname);
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
