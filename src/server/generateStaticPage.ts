import { IndexPage, IndexPageProps } from '../client/pages';
import React from "react";

import mockDB from 'server/mockDB';
import createHtml from './helper';

const fs = require("fs");
const path = require("path");


type PageDefinition<T> = {
  path: string
  component: React.VFC<T>
  title: string
  getSsgProps: () => T
}
const pages: Readonly<Array<PageDefinition<any>>> = [{
  path: "ssg",
  title: "ssg page",
  component: IndexPage,
  getSsgProps: () => ({ todos: mockDB, pagename: 'ssg' })
}] as const

pages.forEach(page => {
  const pageHtml = createHtml<unknown>({ title: page.title, pageComponent: page.component, props: page.getSsgProps(), url: `/${path}` })
  // 書き込み
  fs.writeFile(`${path.resolve(__dirname, "public/ssg")}/${page.path}.html`, pageHtml, (err: Error) => {
    if (err) throw err;
    console.log(page.path, ': 正常に書き込みが完了しました');
  });
})