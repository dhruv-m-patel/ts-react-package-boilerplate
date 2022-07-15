import React from 'react';
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet', () => {
  test('it should render', () => {
    render(<Greet name="Dhruv" />);
    expect(screen.getByText(/Welcome, Dhruv!/)).toBeInTheDocument();
  });
});
