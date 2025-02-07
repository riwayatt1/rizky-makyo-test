import React, { useState } from "react";
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

  const [isMultiple, setIsMultiple] = useState(true);
  const [isWithSearch, setIsWithSearch] = useState(true);
  const [isOutlined, setIsOutlined] = useState(false);

  return (
    <>
      <div className="bg-gray-100 p-4 w-full">
        <div className="grid grid-cols-5 w-full items-center">
          <div className="col-span-1 text-gray-700 font-medium p-2 flex items-center justify-center">
            Label
          </div>

          <div className="col-span-4 p-2 flex items-center">
            <DropdownWithSearch
              options={options}
              multiple={isMultiple}
              withSearch={isWithSearch}
              outlined={isOutlined}
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex space-x-4">
            <div>
              <label className="mr-2">Multiple</label>
              <button
                onClick={() => setIsMultiple(!isMultiple)}
                className={`p-2 rounded-md ${isMultiple ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              >
                {isMultiple ? "Disable" : "Enable"}
              </button>
            </div>

            <div>
              <label className="mr-2">With Search</label>
              <button
                onClick={() => setIsWithSearch(!isWithSearch)}
                className={`p-2 rounded-md ${isWithSearch ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              >
                {isWithSearch ? "Disable" : "Enable"}
              </button>
            </div>

            <div>
              <label className="mr-2">Outlined</label>
              <button
                onClick={() => setIsOutlined(!isOutlined)}
                className={`p-2 rounded-md ${isOutlined ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              >
                {isOutlined ? "Disable" : "Enable"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
