import React from 'react';

import { Button, Container, Typography } from '@mui/material';

import { FallBackProps } from '../../types/fallback';

function ProductFallBack({ error, resetErrorBoundary }: FallBackProps) {
  return (
    <Container role="alert">
      <Typography>
        Alguma coisa deu errado ao carregar a página de produtos:
      </Typography>
      <pre>{error.message}</pre>
      <Button type="button" onClick={resetErrorBoundary}>
        Tentar novamente
      </Button>
    </Container>
  );
}

export default ProductFallBack;
