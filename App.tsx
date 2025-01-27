import React, { useCallback, useState } from 'react';
import DicomViewer from './components/DicomViewer';
import FileUpload from './components/FileUpload';
import MetadataPanel from './components/MetadataPanel';
import Toolbar from './components/Toolbar';
import { useStore } from './store/useStore';

const App: React.FC = () => {
  const { isDarkMode, setZoom } = useStore();
  const [imageSrc, setImageSrc] = useState<File | undefined>(undefined);
  const [zoomLevel, setZoomLevel] = useState<number>(1); // Initialize zoom level

  const handleZoomIn = useCallback(() => {
    const newZoom = zoomLevel + 0.1; // Calculate new zoom
    setZoom(newZoom); // Set zoom directly
    setZoomLevel(newZoom); // Update local zoom level
  }, [zoomLevel, setZoom]);

  const handleZoomOut = useCallback(() => {
    const newZoom = Math.max(zoomLevel - 0.1, 0.1); // Calculate new zoom
    setZoom(newZoom); // Set zoom directly
    setZoomLevel(newZoom); // Update local zoom level
  }, [zoomLevel, setZoom]);

  const oneFixCulla = useCallback(() => {
    if (imageSrc) {
      const img = new Image();
      img.src = URL.createObjectURL(imageSrc);
      const previewWindow = window.open('', '_blank');
      previewWindow?.document.write(`<img src="${img.src}" style="max-width:100%; height:auto;" />`);
    } else {
      console.log("No image loaded to preview.");
    }
  }, [imageSrc]);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Toolbar
        zoomIn={handleZoomIn}
        zoomOut={handleZoomOut}
        pan={() => {}}
        crop={() => {}}
        adjustBrightness={() => {}}
        adjustContrast={() => {}}
        draw={() => {}}
        addText={() => {}}
      />
      <DicomViewer />
      <FileUpload 
        setCurrentImage={setImageSrc} 
        setMetadata={() => {}} 
        zoomIn={handleZoomIn} 
        zoomOut={handleZoomOut} 
        pan={() => {}} 
        oneFixCulla={oneFixCulla} 
      />
      <MetadataPanel />
    </div>
  );
};

export default App;
