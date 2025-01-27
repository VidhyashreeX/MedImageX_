# MedImageX - Medical Image Viewer and Annotation Tool

MedImageX is a modern, web-based medical image viewer and annotation tool designed for viewing and annotating medical images with an intuitive user interface. Built with React, TypeScript, and modern web technologies, this application supports various image formats and offers powerful image manipulation and annotation features.

## Features

- **Image Format Support**: Supports DICOM, PNG, JPEG, and other common image formats.
- **Image Manipulation Tools**:
  - Zoom in/out.
  - Draw.
  - Image preview.

- **Appearance Customization**:
  - Toggle between dark and light modes.
  - Fully responsive design for  desktop devices.


---

## Tech Stack Used

- **React**: JavaScript library for building the user interface.
- **TypeScript**: A statically typed superset of JavaScript for better development experience.
- **KonvaJS**: A 2D canvas library for rendering shapes, images, and text.
- **Tailwind CSS**: Utility-first CSS framework for fast UI development.
- **Vite**: A fast and lean build tool for modern web development.
- **Docker**: Containerized deployment for easy distribution and scaling.

---

## Application Architecture

TThe application follows a modular architecture with reusable React components for the UI and custom hooks to manage image loading, viewport control, and other logic. Zustand is used for global state management, providing persistence for settings and image data. Utility functions handle tasks like image processing and DICOM parsing. This modular approach ensures the app remains organized, maintainable, and scalable for future features.

---

## Key Design Choices

I chose simple state management over more complex solutions for ease of use and built-in persistence. For efficient image rendering, I used **KonvaJS**, which provides smooth canvas-based interactions. The styling was done with **Tailwind CSS**, ensuring rapid development and responsiveness. The app supports both **DICOM** and common image formats like **PNG** and **JPEG**, and I implemented image preloading and efficient canvas updates to maintain smooth performance. I also used **TypeScript** for type safety and **React Icons** for UI components instead of **Naive UI**, as **React Icons** integrates seamlessly and is easier to work with for this project.


---

## Getting Started

---

### Development Setup

1. **Install Dependencies**:
   ```bash
   npm install

----
### Project Structure

medimagex/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components (e.g., buttons, modals)
│   │   └── viewer/       # Image viewer components
│   ├── hooks/            # Custom React hooks
│   ├── store/            # Zustand store configuration
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions (e.g., image processing)
├── public/               # Static assets (e.g., icons, images)
└── docker/               # Docker configuration files

------
