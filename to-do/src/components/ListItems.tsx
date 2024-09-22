import { taskInterface } from '../App';
import React from 'react';

interface ListItemsInterface {
    task: taskInterface[];
    deleteTheElement:(index:number)=>void;
    editTheElement:(index:number)=>void;
    checkTheElement:(index:number, val:boolean)=>void;
}

const ListItems: React.FC<ListItemsInterface> = ({ task, deleteTheElement, editTheElement, checkTheElement }) => {

    return (
        <ul className="space-y-4">
            {task.map((ele: taskInterface, index: number) => (
                <li key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <input type="checkbox" onClick={(e:any)=>{
                        checkTheElement(index, e.target.value)
                    }} />
                    <div className="flex gap-12">
                        <h3 className="text-lg font-semibold text-gray-800">{ele.name}</h3>
                        <p className={`mt-1 text-sm font-medium ${ele.status? 'text-green-600' : 'text-yellow-600'}`}>{ele.status === true?"Submitted":"Pending"}</p>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={()=>{
                            console.log(index);
                            deleteTheElement(index);
                        }}  className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200">Delete</button>
                        <button onClick={()=>{
                            console.log(index);
                            editTheElement(index);
                        }} className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200">Edit</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ListItems;
