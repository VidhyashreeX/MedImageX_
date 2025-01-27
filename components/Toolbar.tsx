import React from 'react';
import { Upload, ZoomIn, ZoomOut, Crop, Sun, Moon, Edit } from 'lucide-react'; // Use available icons
import { IoIosFunnel } from 'react-icons/io';

interface ToolbarProps {
  toggleDarkMode: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  pan: () => void;
  crop: () => void;
  adjustBrightness: () => void;
  adjustContrast: () => void;
  draw: () => void;
  addText: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ 
  toggleDarkMode, 
  zoomIn, 
  zoomOut, 
  pan, 
  crop, 
  adjustBrightness, 
  adjustContrast, 
  draw, 
  addText 
}) => {
  function windowSlider(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    console.log('Window slider button clicked');
    // Implement the logic for window slider here
    // For example, you can toggle a state that shows/hides a slider component
  }

  return (
    <div className="fixed right-0 top-0 p-4 flex flex-col gap-2">
      {/* Dark/Light Mode Button */}
      <button 
        onClick={toggleDarkMode} 
        className="bg-primary text-black p-2 rounded-lg shadow-lg transition-colors">
        {true ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Zoom In Button */}
      <button 
        onClick={zoomIn} 
        className="bg-primary text-black p-2 rounded-lg shadow-lg transition-colors">
        <ZoomIn size={20} />
      </button>

      {/* Zoom Out Button */}
      <button 
        onClick={zoomOut} 
        className="bg-primary text-black p-2 rounded-lg shadow-lg transition-colors">
        <ZoomOut size={20} />
      </button>

      {/* Draw Tool Button */}
      <button
        onClick={draw}
        className="bg-primary text-black p-2 rounded-lg shadow-lg transition-colors hover:bg-opacity-80"
      >
        <Edit size={20} />
      </button>

      {/* Window Slider Button */}
      <button 
        onClick={windowSlider} 
        className="bg-primary text-black p-2 rounded-lg shadow-lg transition-colors">
        <IoIosFunnel className="w-6 h-6" /> {/* Window Slider Icon */}
      </button>

      {/* Crop Tool Button */}
      <button
        onClick={crop}
        className="bg-primary text-black p-2 rounded-lg shadow-lg transition-colors hover:bg-opacity-80"
      >
        <Crop size={20} />
      </button>
    </div>
  );
};

export default Toolbar;
