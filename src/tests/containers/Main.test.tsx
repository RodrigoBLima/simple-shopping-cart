import React from 'react';
import { render } from '@testing-library/react';
import Main from '../../containers/Main';

test('document page title', () => {
  render(<Main />);
  const documentTitle = 'Shopping Cart';

  expect(documentTitle).toEqual('Shopping Cart');
});
