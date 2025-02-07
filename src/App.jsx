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

        <div className="mt-8">
          <div className="flex space-x-8 justify-start">
            <div className="flex flex-col items-center">
              <label className="text-sm text-gray-700 mb-2">Multiple</label>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  checked={isMultiple}
                  onChange={() => setIsMultiple(!isMultiple)}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <label className="text-sm text-gray-700 mb-2">With Search</label>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  checked={isWithSearch}
                  onChange={() => setIsWithSearch(!isWithSearch)}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <label className="text-sm text-gray-700 mb-2">Outlined</label>
              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  checked={isOutlined}
                  onChange={() => setIsOutlined(!isOutlined)}
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
