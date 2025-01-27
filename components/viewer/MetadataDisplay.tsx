import React from 'react';

interface MetadataDisplayProps {
  metadata: {
    patientName?: string;
    patientId?: string;
    studyDate?: string;
    modality?: string;
    pixelSpacing?: number[];
    windowCenter?: number;
    windowWidth?: number;
  } | null;
}

const MetadataDisplay: React.FC<MetadataDisplayProps> = ({ metadata }) => {
  // Dummy metadata for testing
  const dummyMetadata = {
    patientName: 'John Doe',
    patientId: '123456',
    studyDate: '2025-01-26',
    modality: 'CT',
    pixelSpacing: [0.5, 0.5],
    windowCenter: 40,
    windowWidth: 80,
  };

  const displayMetadata = metadata || dummyMetadata;

  return (
    <div style={{ position: 'absolute', left: 0 }}>
      <h2>DICOM Metadata</h2>
      <p>Patient Name: {displayMetadata.patientName || 'N/A'}</p>
      <p>Patient ID: {displayMetadata.patientId || 'N/A'}</p>
      <p>Study Date: {displayMetadata.studyDate || 'N/A'}</p>
      <p>Modality: {displayMetadata.modality || 'N/A'}</p>
      <p>Pixel Spacing: {displayMetadata.pixelSpacing ? `${displayMetadata.pixelSpacing[0]} mm x ${displayMetadata.pixelSpacing[1]} mm` : 'N/A'}</p>
      <p>Window Settings: C: {displayMetadata.windowCenter || 'N/A'} / W: {displayMetadata.windowWidth || 'N/A'}</p>
    </div>
  );
};

export default MetadataDisplay;
