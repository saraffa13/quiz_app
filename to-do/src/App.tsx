import Form from './components/Form'
import Navbar from './components/Navbar'
import './App.css'
import ListItems from './components/ListItems'
import { useState } from 'react'

export interface taskInterface {
  name:string,
  status:boolean
}

function App() {

  const [task, setTask] = useState<taskInterface[]>([]);
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<any>({
    name:"",
    index:-1
  });  
  

  const nameFetcher = (val:string) => {
    let newTask:taskInterface[]=[];

    newTask.push({
      name:val,
      status:false,
    })
    newTask.push(...task);
    setTask(newTask);
    setEdit(false);
    setEditValue({
      name:"",
      index:-1
    });
  }

  const deleteTheElement = (index:number) =>{
    const newTask = task.filter((ele,i)=>index!=i);
    setTask(newTask)
  }

  const editTheElement = (i:number) =>{
    setEdit(true);
    setEditValue({name:task[i].name, index:i})
  }

  const fetchTheEditedValue = (n:string, index:number) =>{
    let newTask:taskInterface[]=[...task];
    newTask[index].name=n,
    setTask(newTask);
    setEdit(false);
    setEditValue({
      name:"",
      index:-1
    })
  }


  const checkTheElement = (i:number, val:boolean) =>{
    console.log(i);
    let newTask:taskInterface[]=[...task];
    newTask[i].status=! newTask[i].status,
    setTask(newTask);
  }

  return (
    <>
      <Navbar />
      <Form nameFetcher={nameFetcher} edit={edit} editValue={editValue} fetchTheEditedValue={fetchTheEditedValue} />
      <ListItems task={task} deleteTheElement={deleteTheElement} editTheElement={editTheElement} checkTheElement={checkTheElement}/>
    </>
  )
}

export default App
