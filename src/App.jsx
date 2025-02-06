import React from "react";
import DropdownWithSearch from "./components/DropdownWithSearch";

const App = () => {
  const options = [
    "Option 1",
    "Option with icon",
    "Long Long Option 3",
    "Long Long Long Option 4",
    "Long Long Long Long Option 5",
    "Long Long Long Long Long Option 6"
  ];

  return (
    <>
  <div className="bg-gray-100 p-4 w-full">
      <div className="grid grid-cols-5 w-full items-center">
        <div className="col-span-1 text-gray-700 font-medium p-2 flex items-center justify-center">
          Label
        </div>
        
        <div className="col-span-4 p-2 flex items-center">
          <DropdownWithSearch options={options} />
        </div>
      </div>
    </div>  
    </>
  );
};

export default App;
