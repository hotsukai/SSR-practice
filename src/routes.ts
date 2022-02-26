import { IndexPage } from "./client/pages";
import DetailPage from "./client/pages/detail";
import { VFC } from "react";
import { fetchData } from "./utils";


const baseUrl = 'http://localhost:3000'
export type PageProps = {
  path: string, component: VFC<{ data?: any, fetchInitData?: any }>, fetchInitData: (url?: string) => unknown
}
const routes: PageProps[] = [
  { path: '/ssr', component: IndexPage, fetchInitData: () => fetchData(baseUrl + '/api/todo') },
  { path: '/ssr/:id', component: DetailPage, fetchInitData: (url: string) => fetchData(baseUrl + `/api/todo/${url.match(/ssr\/(.*)/)[1]}`) },
]

export default routes