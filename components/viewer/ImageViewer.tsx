import React, { useRef } from 'react';

const ImageViewer: React.FC<{ currentImage: File | undefined }> = ({ currentImage }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDraw = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        ctx.fillStyle = 'red'; 
        ctx.fillRect(x, y, 5, 5); 
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {currentImage ? (
        <img src={URL.createObjectURL(currentImage)} alt="Current" />
      ) : (
        <p>No image selected</p>
      )}
      <canvas
        ref={canvasRef}
        onMouseDown={handleDraw}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
    </div>
  );
};

export default ImageViewer;
