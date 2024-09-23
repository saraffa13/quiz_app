import { useState } from "react";
import "./App.css"; // Assuming your advanced styles are in App.css
import { MdOutlineAddCircle } from "react-icons/md";
import { GiSplitCross } from "react-icons/gi";
import Model from "./assets/component/model";

interface Avatar {
  name: string;
  id: number;
  colorCode: string;
}

// Function to generate random color codes
const createRandomColorCodes = () => {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

export default function App() {
  const [avatarList, setAvatarList] = useState<Avatar[]>([]);

  const [showForm, setShowForm] = useState<boolean>(false);

  // Handler to add new avatar
  const handleAddAvatar = () => setShowForm(true);

  // Handler to remove avatar by ID
  const handleRemoveAvatar = (id: number) => {
    setAvatarList((prevList) => prevList.filter((avatar) => avatar.id !== id));
  };

  const nameFetcher = (name:string) =>{
    console.log(name);
    setAvatarList([...avatarList, {name:name,id:Date.now(),colorCode:createRandomColorCodes()}]);
    setShowForm(false);
  }
  const formCloser = (val:boolean) =>{
    setShowForm(false);
  }

  return (
    <div className="border border-black min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {showForm && <Model nameFetcher={nameFetcher} />}
      <h1 className="text-6xl font-bold mb-8">Avatar List</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {avatarList.map((avatar: Avatar) => {
          return (
            <div
              key={avatar.id}
              style={{ backgroundColor: avatar.colorCode }}
              className="relative h-24 w-24 rounded-full flex justify-center items-center text-white text-3xl transition-transform transform hover:scale-110 shadow-lg"
            >
              {/* Avatar Initial */}
              {avatar.name[0]}

              {/* Remove Avatar Button */}
              <div
                onClick={() => handleRemoveAvatar(avatar.id)}
                className="absolute top-0 right-0 cursor-pointer p-1 rounded-full bg-[#594141] text-white hover:bg-red-600 hover:text-white transition-colors"
              >
                <GiSplitCross />
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Avatar Button */}
      <button
        onClick={handleAddAvatar}

        className="mt-10 h-16 w-16 flex justify-center items-center rounded-full bg-green-500 text-white text-5xl hover:bg-green-600 transition-all duration-300"
      >
        <MdOutlineAddCircle />
      </button>
    </div>
  );
}
