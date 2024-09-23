import { useState } from "react";

export default function Model({nameFetcher}:{nameFetcher:any}) {

    const [name, setName] = useState<string>('');

    const formSubmissionHandler = (e:any) => {
        e.preventDefault();
        nameFetcher(name);
    }

    return (
      <div className="bg-green-200 min-h-[100vh] min-w-[100vw] flex justify-center items-center absolute top-0 left-0 z-20">
        <form onSubmit={formSubmissionHandler} className="flex flex-col border border-gray-300 p-6 rounded-lg shadow-lg bg-white space-y-4 w-[90%] max-w-md">
          <input
            required
            type="text"
            onChange={(e)=>{
                setName(e.target.value);
            }}
            placeholder="Enter Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
          />
  
          <button
            type="submit"
            className="py-3 px-6 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
  