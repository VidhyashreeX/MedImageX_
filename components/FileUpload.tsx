import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Upload } from 'lucide-react';
import { DicomMetadata } from '../../types/dicom';
import { parseDicomFile } from '../utils/dicomParser';
import { createImageFromFile } from '../utils/imageUtils';
import { Sun, Moon } from 'lucide-react';  // Add these imports

interface FileUploadProps {
  setCurrentImage: React.Dispatch<React.SetStateAction<File | undefined>>;
  setMetadata: React.Dispatch<React.SetStateAction<DicomMetadata | null>>;
}

const FileUpload: React.FC<FileUploadProps> = ({ setCurrentImage, setMetadata }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isAddingText, setIsAddingText] = useState(false);
  const [text, setText] = useState<string>('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const metadata = await parseDicomFile(file);
      setMetadata(metadata);

      const imageUrl = await createImageFromFile(file);
      setCurrentImage(file);
      setImageSrc(imageUrl);

      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setImage(img);

    } catch (error) {
      console.error('Error loading file:', error);
      alert('Error loading file. Please ensure it\'s a valid image format.');
    }
  }, [setCurrentImage, setMetadata]);

  const setupCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctxRef.current = ctx;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (imageRef.current) {
          canvas.width = imageRef.current.width * zoomLevel;
          canvas.height = imageRef.current.height * zoomLevel;
          ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
        }
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isDrawing && ctxRef.current) {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!canvas) return;

      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawing && ctxRef.current) {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!canvas) return;

      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
    }
  };

  const handleMouseUp = () => {
    if (isDrawing && ctxRef.current) {
      const ctx = ctxRef.current;
      ctx.closePath();
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const addText = () => {
    if (ctxRef.current && text) {
      const ctx = ctxRef.current;
      const canvas = canvasRef.current;
      if (!canvas) return;

      ctx.font = '20px Arial';
      ctx.fillStyle = 'red';
      ctx.fillText(text, 50, 50);
      setText('');
      setIsAddingText(false);
    }
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 0.5));
  };

  useEffect(() => {
    if (imageRef.current) {
      setupCanvas();
    }
  }, [imageRef.current, zoomLevel]);

  return (
    <div className={`flex items-start justify-center w-full min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      {/* Left panel for buttons */}
      <div className="flex flex-col items-start gap-4 p-4 w-72 bg-white border-r shadow-lg">
        
        {/* Dark/Light Mode Toggle */}
        <button onClick={toggleTheme} className="bg-primary text-black p-2 rounded-lg shadow-lg transition-colors mb-4">
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        {/* Upload Button */}
        <label className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
          <Upload size={20} />
          <span className="text-sm font-medium">Choose File to Upload</span>
          <input
            type="file"
            accept="image/*,.dcm"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>

        {/* Drawing Button */}
        <button
          onClick={() => setIsDrawing(!isDrawing)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          {isDrawing ? 'Stop Drawing' : 'Start Drawing'}
        </button>

        {/* Text Button */}
        <button
          onClick={() => setIsAddingText(!isAddingText)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          {isAddingText ? 'Cancel Text' : 'Add Text'}
        </button>

        {isAddingText && (
          <div>
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Enter text"
              className="mt-2 p-2 border rounded"
            />
            <button
              onClick={addText}
              className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
            >
              Add Text
            </button>
          </div>
        )}

        {/* Zoom Buttons */}
        <button
          onClick={zoomIn}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Zoom In
        </button>
        <button
          onClick={zoomOut}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg mt-2"
        >
          Zoom Out
        </button>
      </div>

      {/* Right panel for image preview and canvas */}
      <div className="flex-1 flex justify-center items-center p-4">
        {imageSrc && (
          <div className="relative">
            {/* Image preview */}
            <img
              ref={imageRef}
              src={imageSrc}
              alt="Preview"
              style={{
                transform: `scale(${zoomLevel})`,
                width: 'auto',
                height: 'auto',
              }}
              className="max-w-full max-h-full object-contain"
            />
            <canvas
              ref={canvasRef}
              width={image ? image.width * zoomLevel : 500}
              height={image ? image.height * zoomLevel : 500}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              className="absolute top-0 left-0 border"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
