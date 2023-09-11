import * as React from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { useParams } from 'next/navigation';

export default function Product() {
  const params = useParams();
  const { productName} = params;
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        
      </Box>
    </Container>
  );
}
