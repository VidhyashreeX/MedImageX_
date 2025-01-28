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

## Screenshots

1. **Main Image Viewer Interface**  

2. **Image Annotation Tools**  

3. **Dark Mode Appearance**  

4. **Responsive Design on Desktop**  
<img width="1440" alt="2 10 2025-01-28 at 10 26 33 AM" src="https://github.com/user-attachments/assets/0314a281-75b1-482f-8620-7834841d9b22" />
<img width="1440" alt="2 10 2025-01-28 at 10 25 53 AM" src="https://github.com/user-attachments/assets/a901783b-ad92-4389-a382-04b05eefe5c1" />
<img width="1440" alt="2 10 2025-01-28 at 10 25 21 AM" src="https://github.com/user-attachments/assets/7870da28-8dad-4e98-967f-613c03107068" />
<img width="1440" alt="2 10 2025-01-28 at 10 24 51 AM" src="https://github.com/user-attachments/assets/74afe564-3396-4b5c-af34-d8b4db74e969" />


