import { taskInterface } from '../App';
import React from 'react';

interface ListItemsInterface {
    task: taskInterface[];
    deleteTheElement: (index: number) => void;
    editTheElement: (index: number) => void;
    checkTheElement: (index: number, val: boolean) => void;
}

const ListItems: React.FC<ListItemsInterface> = ({ task, deleteTheElement, editTheElement, checkTheElement }) => {
    return (
        <ul className="space-y-6 mt-10">
            {task.map((ele: taskInterface, index: number) => (
                <li
                    key={index}
                    className="grid grid-cols-[1fr_auto_auto] items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
                >
                    <div className="flex items-center gap-4">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-green-600 transition duration-300 ease-in-out"
                            onClick={(e: any) => {
                                checkTheElement(index, e.target.checked);
                            }}
                        />
                        <h3
                            className={`text-lg font-semibold ${
                                ele.status ? 'text-gray-500 line-through' : 'text-gray-900'
                            } transition-all duration-300 ease-in-out`}
                        >
                            {ele.name}
                        </h3>
                    </div>
                    <p
                        className={`text-sm font-medium ${
                            ele.status ? 'text-green-600' : 'text-yellow-500'
                        } transition duration-300 mr-48`}
                    >
                        {ele.status === true ? 'Submitted' : 'Pending'}
                    </p>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => deleteTheElement(index)}
                            className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-300"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => editTheElement(index)}
                            className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
                        >
                            Edit
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ListItems;
