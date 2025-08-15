# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 application using the App Router with Chakra UI v3 for the component library and styling system.

### Key Technologies
- **Next.js 15** with App Router (app/ directory structure)
- **React 19** as the core framework
- **Chakra UI v3** for components and theming with Emotion for CSS-in-JS
- **next-themes** for theme switching support
- **Framer Motion** for animations (via Chakra UI)

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.js` - Root layout with Chakra UI Provider wrapper
  - `page.js` - Homepage component
- `components/ui/` - Chakra UI configuration and custom components
  - `provider.jsx` - Main Chakra UI provider with color mode support
  - `color-mode.jsx` - Color mode (theme) management
  - `toaster.jsx`, `tooltip.jsx` - UI utility components

### Styling and Theming
The application uses Chakra UI's default design system (`defaultSystem`) with color mode support. Components should use Chakra UI components and follow their design patterns.

### Development Notes
- Uses `'use client'` directives where needed for client-side functionality
- Follows Next.js App Router conventions for file-based routing
- All UI components should leverage Chakra UI's component library