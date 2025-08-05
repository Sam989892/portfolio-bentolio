# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio application built with TypeScript, React 19, and Tailwind CSS 4. The main feature is a custom Bentolio component that creates an animated, responsive portfolio layout with 3D flip animations and multiple layout modes.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build`
- **Production server**: `npm start`
- **Linting**: `npm run lint`

## Architecture

### Core Structure
- **App Router**: Uses Next.js 15 App Router (`src/app/`)
- **Component Library**: shadcn/ui components with custom modifications
- **Styling**: Tailwind CSS 4 with custom CSS variables and animations
- **Animations**: Framer Motion for 3D transitions and micro-interactions

### Key Components

**Bentolio Component** (`src/components/ui/bentolio.tsx`)
- Main portfolio component with bento box grid layout
- Three layout modes: `original`, `compact`, `fullscreen`
- Animated page transitions with 3D flip effects using Framer Motion
- Dynamic content switching for different navigation sections (HOME, PROJECTS, ABOUT, CONTACT)
- Responsive design with mobile menu
- Fixed profile image dimensions: 254.22 x 439 pixels

### Component Configuration
- Uses shadcn/ui configuration in `components.json`
- Path aliases configured: `@/components`, `@/lib`, `@/hooks`
- New York style variant with CSS variables enabled

### Styling System
- Tailwind CSS 4 with custom blue theme
- Global styles in `src/app/globals.css`
- Responsive breakpoints: sm, md, lg, xl, 2xl
- Custom animations and transitions throughout

### Key Features
- Multi-layout portfolio display
- Animated navigation with active indicators
- 3D flip animations on content changes
- Mobile-responsive design
- Dynamic content for different pages
- Social links and contact integration

## Important Implementation Details

- Profile image uses exact fixed dimensions (254.22 x 439px) for consistent layout
- Layout switcher in top-right corner for testing different responsive modes
- Uses perspective transforms for 3D effects
- AnimatePresence for smooth page transitions
- Custom spring animations with specific stiffness/damping values