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
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={isMultiple}
                  onChange={() => setIsMultiple(!isMultiple)}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Multiple
                </span>
              </label>
            </div>

            <div className="flex flex-col items-center">
              <label className="text-sm text-gray-700 mb-2">With Search</label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={isWithSearch}
                  onChange={() => setIsWithSearch(!isWithSearch)}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  With Search
                </span>
              </label>
            </div>

            <div className="flex flex-col items-center">
              <label className="text-sm text-gray-700 mb-2">Outlined</label>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked={isOutlined}
                  onChange={() => setIsOutlined(!isOutlined)}
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Outlined
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
