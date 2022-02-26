import { ToDoItem } from "app"

const mockDB = {
  data: [
    { id: 'id1', title: 'hoge', detail: 'hogehoge', isFinished: false },
    { id: 'id2', title: 'fuga', detail: 'fugafuga', isFinished: true },
  ],
  findAll: function () { return this.data as ToDoItem[] },
  find: function (id: string) { return this.data.find(d => d.id === id) as ToDoItem },
}
export default mockDB