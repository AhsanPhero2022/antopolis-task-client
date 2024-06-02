# Next.js Animal Gallery Project

This is a Next.js project built with TypeScript. The application features a homepage that fetches data from a server and displays it. It includes filtering options and allows users to add animals and their categories via a Material UI modal. The project utilizes several modern technologies and libraries for an enhanced development experience and user interface.

## Features

- **Homepage**: Fetches and displays data from the server.
- **Filtering**: Allows users to filter animals by category.
- **Add Animals**: Users can add new animals and categories through a Material UI modal.
- **Toast Notifications**: Utilizes Sonner Toast for notifications.
- **Responsive Design**: Designed with Tailwind CSS and Daisy UI for responsive and customizable styles.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Type-safe JavaScript for better development experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Material UI**: React components for faster and easier web development.
- **Sonner Toast**: Notifications library for React.
- **Daisy UI**: UI components for Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AhsanPhero2022/antopolis-task-client.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Server Setup

Ensure you have a server running to fetch and post data. You can use any backend server (e.g., Express, Node.js) to provide endpoints for fetching images and categories.

Example endpoint structure:

- **GET** `/images`: Fetch all images.
- **GET** `/category`: Fetch all categories.
- **POST** `/category`: Add a new category.

### Folder Structure
