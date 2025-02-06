import React, { useState, useCallback, useRef, useEffect } from "react";
import { ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";

const DropdownWithSearch = ({
  options,
  multiple = true,
  withSearch = true,
  outlined = false,
  optionLabel = "-",
  onChange = () => {},
  id = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const clearSearch = () => setSearchTerm("");

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm(""); 
    }
  }, [isOpen]);

  const handleSelect = (item) => {
    if (multiple) {
      setSelectedItems((prevItems) =>
        prevItems.includes(item)
          ? prevItems.filter((selected) => selected !== item)
          : [...prevItems, item]
      );
    } else {
      setSelectedItems([item]);
      setIsOpen(false);
    }
    onChange(item);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems((prevItems) => prevItems.filter((selected) => selected !== item));
    onChange(item); 
  };

  const getHighlightedText = (text, search) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} className="bg-[#2ba7a6]">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handleBlur = (event) => {
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full max-w-full" tabIndex={0} onBlur={handleBlur}>
      <div
        onClick={toggleDropdown}
        className={`flex items-center justify-between p-2 border ${outlined ? 'bg-gray-200 border-gray-400' : 'border-gray-300'} hover:border-black cursor-pointer w-full rounded-md`}
      >
        <div className="flex flex-wrap gap-2 min-h-[30px] items-center">
          {multiple && selectedItems.length > 0 ? (
            selectedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-1 px-2 bg-gray-200 rounded-md text-sm text-black"
              >
                {item}
                <XMarkIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveItem(item);
                  }}
                  className="h-4 w-4 ml-2 text-black cursor-pointer"
                />
              </div>
            ))
          ) : (
            <span>{selectedItems.length > 0 ? selectedItems[0] : optionLabel}</span>
          )}
        </div>
        <ChevronDownIcon className="h-5 w-5 text-black-800" />
      </div>

      {isOpen && (
        <div className="absolute right-0 w-full max-w-full mt-2 border border-gray-300 bg-white shadow-lg rounded-md z-50">
          {withSearch && (
            <div className="flex items-center p-2 border-b border-gray-300">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-2 bg-transparent outline-none"
              />
              {searchTerm && (
                <XMarkIcon className="h-5 w-5 text-gray-500 cursor-pointer" onClick={clearSearch} />
              )}
            </div>
          )}

          <div className="max-h-60 overflow-auto w-full">
            {options.length > 0 ? (
              options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={`p-2 cursor-pointer hover:bg-[#edf4f1] ${
                    selectedItems.includes(option) ? "bg-[#edf4f1]" : ""
                  }`}
                >
                  {getHighlightedText(option, searchTerm)}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">Tidak ada hasil</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithSearch;
