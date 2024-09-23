import Form from './components/Form'
import Navbar from './components/Navbar'
import './App.css'
import ListItems from './components/ListItems'
import { useEffect, useState } from 'react'
import useLocalStorage from './hooks/localStorage'

export interface taskInterface {
  name: string,
  status: boolean
}
export interface editValueInterface {
  name: string,
  index: number
}

const initValueToBeEdited: editValueInterface = {
  name: "",
  index: -1
}

function App() {

  const [task, setTask] = useState<taskInterface[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<any>(initValueToBeEdited);
  const [taskList, setTaskList] = useLocalStorage<taskInterface[]>('taskList', []);


  useEffect(() => {
    if (taskList) {
      setTask(taskList)
    }
  }, [])

  const newTaskCreater = (val: string) => {
    let newTask: taskInterface[] = [];

    newTask.push({
      name: val,
      status: false,
    })
    newTask.push(...task);
    setTask(newTask);
    setTaskList(newTask);
    setEdit(false);
    setEditValue(initValueToBeEdited);

  }
  const fetchTheEditedValue = (name: string, index: number) => {
    let newTask: taskInterface[] = [...task];
    newTask[index].name = name,
    setTask(newTask);
    setTaskList(newTask);
    setEdit(false);
    setEditValue(initValueToBeEdited)
  }

  const deleteTheElement = (index: number) => {
    const newTask = task.filter((ele, i) => index != i);
    setTaskList(newTask);
    setTask(newTask);
    setEdit(false);
    setEditValue(initValueToBeEdited)
  }

  const editTheElement = (i: number) => {
    setEdit(true);
    setEditValue({ name: task[i].name, index: i })
  }

  const checkTheElement = (i: number, val: boolean) => {
    let newTask: taskInterface[] = [...task];
    newTask[i].status = !newTask[i].status,
      setTask(newTask);
    setTaskList(newTask);

  }

  return (
    <>
      <Navbar />
      <Form newTaskCreater={newTaskCreater} edit={edit} editValue={editValue} fetchTheEditedValue={fetchTheEditedValue} />
      <ListItems task={task} deleteTheElement={deleteTheElement} editTheElement={editTheElement} checkTheElement={checkTheElement} />
    </>
  )
}

export default App
