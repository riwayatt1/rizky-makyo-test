# Dropdown With Search

Dropdown With Search is a React component that can be used to create a dropdown with a search feature. This component supports multiple item selection, searching within the list, and can be configured to use a portal or not.

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) version 16 or higher.
- [Vite](https://vitejs.dev/) to run the development server.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [Storybook](https://storybook.js.org/) for component documentation and testing.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**
   Clone this repository to your local machine.

   git clone https://github.com/riwayatt1/rizky-makyo-test.git

   cd rizky-makyo-test
   
3. **Install Dependencies**
   Install all dependencies using npm or yarn.

   npm install

   or with yarn:

   yarn install

4. **Run the Project in Development Mode**
   To run the React app in development mode, use the following command:

   npm run dev

   or with yarn:

   yarn dev

   The app will be running on http://localhost:3000.

# Running Storybook

Storybook is used for documenting and testing components. To run Storybook, execute the following command:

## npm run storybook

Storybook will open on http://localhost:6006.

# Usage

DropdownWithSearch Props

This component accepts several props that can be customized according to your needs.

| Prop           | Type        | Description                                                   | Default     |
|----------------|-------------|-------------------------------------------------------------|-------------|
| `multiple`     | `boolean`   | Enables or disables multiple selection.                      | `true`      |
| `withSearch`   | `boolean`   | Enables the search feature within the dropdown.              | `true`      |
| `outlined`     | `boolean`   | Enables the outlined style for the dropdown.                 | `false`     |
| `options`      | `array`     | An array of options to be displayed in the dropdown.         | `["Option 1", "Option 2"]` |
| `optionLabel`  | `string`    | The label displayed when no item is selected.                | `"-"`       |
| `onChange`     | `function`  | A function called when an item is selected or removed.       | `() => {}`  |
| `id`           | `string`    | An ID for the dropdown, used for labeling or accessibility. | `""`        |

