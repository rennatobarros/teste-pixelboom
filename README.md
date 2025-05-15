# User Management Interface

This project is a technical test implementation for a Frontend Developer position at Pixel Boom Studios. It's a modern, responsive user management interface built with React, TypeScript, and Vite, featuring a beautiful UI powered by shadcn/ui components and styled with Tailwind CSS.

🎨 [View Figma Design](https://www.figma.com/design/TOALrzlKsyYKDhWIIvysNI/Teste-Frontend-Developer?node-id=0-1&p=f&t=e2xHEgEuILnbmnkU-0)

## Implementation Checklist

### Required Features ✅

- [x] **Listing Screen**
  - [x] Display a list of user records
  - [x] Add button for new entries
  - [x] Responsive grid layout
  - [x] User status indicators

- [x] **User Management**
  - [x] Add new user functionality
  - [x] Edit existing user details
  - [x] Modal/Drawer implementation using shadcn/ui
  - [x] Form validation and error handling
  - [x] Success notifications
  - [x] Status toggle (Active/Inactive)

- [x] **UI/UX Requirements**
  - [x] Shadcn/ui components integration
  - [x] Responsive design (mobile/desktop)
  - [x] Loading states
  - [x] Error handling
  - [x] Toast notifications

![User Management Interface](screenshot.png)

## Features

- 📱 **Responsive Design**: Fully responsive interface that works seamlessly on desktop and mobile devices
- 👤 **User Management**:
  - Add new users with detailed information
  - Edit existing user details
  - Toggle user status (Active/Inactive)
  - View user activity statistics
- 🎨 **Modern UI Components**:
  - Beautiful drawer/bottom sheet for forms
  - Interactive data tables
  - Responsive cards and grids
  - Toast notifications for actions
- 📊 **Dashboard Overview**:
  - Total users count
  - Active/Inactive users statistics
  - Session time tracking
  - User activity monitoring

## Tech Stack

- ⚛️ **React** - Frontend library
- 📘 **TypeScript** - Type safety and better developer experience
- ⚡ **Vite** - Next generation frontend tooling
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔷 **shadcn/ui** - High-quality React components
- 📦 **Other key libraries**:
  - Lucide React - Beautiful icons
  - React Hook Form - Form handling
  - Sonner - Toast notifications
  - Vaul - Drawer components

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## Project Structure

```
src/
├── components/
│   ├── compositions/    # Complex components
│   ├── elements/        # Basic reusable components
│   ├── sections/        # Page sections
│   └── ui/             # shadcn/ui components
├── hooks/              # Custom React hooks
├── lib/               # Utility functions
└── pages/             # Page components
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast development experience
