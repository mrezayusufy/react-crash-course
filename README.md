# React Crash Course Project

This is a React application built as part of a crash course tutorial. The project demonstrates modern React development practices using React Router, TypeScript, and Tailwind CSS.

## Features

- 🚀 Modern React with TypeScript
- ⚡️ React Router v7 for routing
- 🎨 TailwindCSS for styling
- 📱 Responsive design
- 🔥 Hot Module Replacement (HMR) during development
- 📦 Asset bundling and optimization
- 🔄 Server-side rendering with React Router

## Project Overview

This project showcases a simple e-commerce product card component featuring an iPhone 15 Pro. It demonstrates:
- Component-based architecture
- Routing with React Router
- Styling with Tailwind CSS
- Image handling and optimization
- Responsive design principles

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install the dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

To serve the production build locally:

```bash
npm run start
```

## Project Structure

```
app/
├── root.tsx              # Root layout and error boundary
├── routes.ts             # Route configuration
├── app.css               # Global styles
├── components/           # Reusable components
│   ├── ProductCard.tsx   # Product display component
│   └── index.ts          # Component exports
└── routes/
    └── home.tsx          # Home page route
```

## Technologies Used

- [React](https://react.dev/) - JavaScript library for building user interfaces
- [React Router](https://reactrouter.com/) - Declarative routing for React
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Fast build tool

## Key Components

The application currently features a `ProductCard` component that displays product information including:
- Product title
- Product image
- Specifications list
- Purchase button

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Serve production build
- `npm run typecheck` - Check TypeScript types

## Customization

To customize this project:

1. Modify the `ProductCard` component in `app/components/ProductCard.tsx` to display different products
2. Add new routes in the `app/routes/` directory
3. Update styles in `app/app.css` or add new Tailwind classes
4. Add new components to the `app/components/` directory

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t react-crash-course .

# Run the container
docker run -p 3000:3000 react-crash-course
```

### Manual Deployment

For manual deployment, ensure you deploy the output of `npm run build` to your hosting platform.

## Learn More

This project was built as part of a React crash course to demonstrate:
- Modern React patterns
- Component composition
- State management fundamentals
- Styling with Tailwind CSS
- Client-side and server-side routing
- TypeScript integration
