import React from 'react';
import { CircularProgress, Box } from '@mui/material';

export default function LoadingSpinner() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <CircularProgress size={60} />
    </Box>
  );
}