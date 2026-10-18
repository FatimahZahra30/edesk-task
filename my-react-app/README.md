# React User Management Application

## Overview

A single-page React application featuring a user data table, a hierarchical tree view, and a profile section with a simple login form. The application uses sample JSON data to populate the table and organise users by language.

## Features

- **User Data Table:** Displays user records from sample JSON data.
- **View Action:** Allows users to view the data associated with a selected row.
- **Tree View:** Organises users into language-based categories with expandable and collapsible sections.
- **Profile Form:** Provides UserID and Password fields with a submit action.
- **Tabbed Navigation:** Separates the application into Home, Profile, Messages, and Settings sections.

## Tech Stack

- React
- JavaScript (JSX)
- CSS
- react-tabs

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation and Setup

1. Clone the repository or download the project files.
2. Open a terminal in the project root directory — the directory containing `package.json`.
3. Go into the my-react-app directory:

   ```bash
   cd my-react-app
   ```
4. Install the required dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in the terminal to view the application in your browser.

## Project Structure

The project is organised into React components and supporting files.

- `src/components/` — application components, including tab navigation, the data table, and profile form.
- `src/tree-view/` — tree view components and their styling.

## Notes

The login form is a demonstration of form input and submission handling; it does not authenticate users against a backend service.

## AI Usage Disclosure

AI assistance was used during development for CSS debugging and guidance on implementing the tree-view structure. The resulting code was reviewed and integrated into the project by the developer. The rest were done on my own using google, stack-overflow, w3schools, react documentation and other sites that aided my development.