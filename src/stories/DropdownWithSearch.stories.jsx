import React from "react";
import DropdownWithSearch from "../components/DropdownWithSearch";

export default {
  title: "Form/Select Dropdown Field",
  component: DropdownWithSearch,
  argTypes: {
    multiple: { control: "boolean", defaultValue: true },
    withSearch: { control: "boolean", defaultValue: true },
    outlined: { control: "boolean", defaultValue: false },
    options: {
      control: "object",
      defaultValue: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
    id: { control: "text", defaultValue: "" },
  },
};

const Template = (args) => (
  <div className="p-4 w-full">
    <div className="grid grid-cols-6 w-full items-center">
      <div className="col-span-1 text-gray-700 font-medium p-2 flex items-center justify-start">
        Label
      </div>

      <div className="col-span-5 p-2 flex items-center">
        <DropdownWithSearch {...args} />
      </div>
    </div>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  id: " ",
  withSearch: true,
  options: [
    "Option 1",
    "Option with icon",
    "Long Long Option 3",
    "Long Long Long Option 4",
    "Long Long Long Long Option 5",
    "Long Long Long Long Long Option 6"
  ],
  multiple: true,
  optionLabel: "-",
  onChange: "-",
  outlined: false,

};
