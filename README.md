# React TypeScript Starter Template

A comprehensive starter template for building modern React applications with TypeScript. This template extends the basic Vite setup with a rich collection of pre-built components, layouts, and utilities commonly needed in real-world applications.

## Features

- **Dashboard Layout**: Pre-built dashboard layout with sidebar navigation and header components
- **Authentication System**: Ready-to-use login and signup forms with proper validation
- **Data Tables**: Advanced data table components with filtering, sorting, and pagination capabilities
- **UI Component Library**: Collection of reusable UI components including charts, cards, dialogs, and form elements
- **State Management**: Integrated Redux setup with API slices for efficient data handling
- **Routing**: Configured React Router with organized page structure
- **Responsive Design**: Mobile-friendly components that work across all device sizes
- **Asset Library**: Extensive collection of SVG icons and images for common UI needs
- **Theme Support**: Built-in theme toggle functionality for light/dark mode

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components organized by feature
├── layouts/        # Application layout components
├── routes/         # Route definitions
├── redux/          # Redux store, slices, and API endpoints
├── assets/         # Images, icons, and other static assets
├── hooks/          # Custom React hooks
├── providers/       # React context providers
├── theme/          # Theme configuration
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Getting Started

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Customization

This starter template is designed to be easily customizable:

1. Replace the placeholder assets in `src/assets/` with your brand assets
2. Modify the color scheme in `src/theme/` to match your brand
3. Update the navigation structure in `src/components/Dashboard/AppSidebar/`
4. Add your API endpoints in `src/redux/endpoints/`
5. Customize or replace the existing components with your own

## Why Use This Template?

Instead of starting from scratch, this template provides you with:

- A professional dashboard layout ready for business applications
- Pre-built authentication flows that can be easily connected to your backend
- Data table components that handle complex data display requirements
- A consistent design system with reusable components
- Best practices for organizing larger React applications
- Proper TypeScript integration with type safety throughout

This template is ideal for developers who want to jump straight into building features rather than spending time on initial setup and common component implementation.
