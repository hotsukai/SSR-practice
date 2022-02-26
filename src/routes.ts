import { IndexPage } from "./client/pages";
import DetailPage from "./client/pages/detail";
import { VFC } from "react";
import { fetchData } from "./utils";
import mockDB from "./server/mockDB";


export type PageProps = {
  path: string, component: VFC<{ data?: any, fetchInitData?: any }>,
  fetchInitDataOnServer: (url?: string) => unknown, // urlはexpressのslugになる
  fetchInitDataOnBrowser: (pathname?: string) => unknown
}


const routes: PageProps[] = [
  {
    path: '/ssr',
    component: IndexPage,
    fetchInitDataOnServer: () => mockDB.findAll(),
    fetchInitDataOnBrowser: () => fetchData('/api/todo')
  },
  {
    path: '/ssr/:id',
    component: DetailPage,
    fetchInitDataOnServer: (url: string) => mockDB.find(url.match(/ssr\/(.*)/)[1]),
    fetchInitDataOnBrowser: (pathname: string) => fetchData(`/api/todo/${pathname.match(/\/ssr\/(.*)/)[1]}`)
  },
]

export default routes