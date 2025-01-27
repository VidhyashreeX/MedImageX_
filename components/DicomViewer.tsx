import React from 'react';
import Toolbar from './Toolbar';
import { useStore } from '../store/useStore';

const DicomViewer: React.FC = () => {
  const { zoom, setZoom, toggleDarkMode, isDarkMode } = useStore();

  const zoomIn = () => {
    setZoom(Math.min(zoom + 0.1, 3)); // Limit max zoom level
  };

  const zoomOut = () => {
    setZoom(Math.max(zoom - 0.1, 1)); // Limit min zoom level
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Toolbar
        toggleDarkMode={toggleDarkMode} // Ensure toggleDarkMode is passed
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        pan={() => {}}
        crop={() => {}}
        adjustBrightness={() => {}}
        adjustContrast={() => {}}
        draw={() => {}}
        addText={() => {}}
      />
      {/* Add image rendering logic here, using the zoom state */}
    </div>
  );
};

export default DicomViewer;
