import React, { useEffect, useState } from 'react';

interface FormProps {
  newTaskCreater: (name: string) => void;
  edit:boolean
  editValue:any
  fetchTheEditedValue:(n:string, index:number)=>void
}

const Form: React.FC<FormProps> = ({ newTaskCreater, edit, editValue, fetchTheEditedValue }) => {
  const [name, setName] = useState<string>(editValue.name || ''); 

  useEffect(() => {
    if (edit) {
      setName(editValue.name);
    }
  }, [editValue, edit]); 

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (edit) {
      fetchTheEditedValue(name, editValue.index); 
    } else {
      newTaskCreater(name); 
    }
    setName('');
  };


  return (
    <form className="bg-slate-300 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-10 space-y-4" onSubmit={formSubmitHandler}>
      <div className="flex flex-col">
        <label htmlFor="task" className="text-lg font-semibold text-gray-700 mb-2">Task</label>
        <input
          onChange={nameInputHandler}
          type="text"
          id="task"
          value={name}
          placeholder="Enter a new task"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all ease-in-out duration-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        {edit?'Edit':'Add Task'}
      </button>
    </form>
  );
}

export default Form;
