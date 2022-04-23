import React from 'react';

import { Button, Container, Typography } from '@mui/material';

import { FallBackProps } from '../../types/fallback';

function CartFallBack({ error, resetErrorBoundary }: FallBackProps) {
  return (
    <Container role="alert">
      <Typography>
        Alguma coisa deu errado com seus produtos, entre em contato com o
        suporte:
      </Typography>
      <pre>{error.message}</pre>
      <Button type="button" onClick={resetErrorBoundary}>
        Tentar novamente
      </Button>
    </Container>
  );
}

export default CartFallBack;
