import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListPokemons } from '../../pages/ListPokemons/ListPokemons';

test('render title page', () => {
  render(<ListPokemons />);
  const linkElement = screen.getByText(/Pokedex/i);
  expect(linkElement).toBeInTheDocument();
});

test('render the pokemon search field', () => {
  render(<ListPokemons />);
  const linkElement = screen.getByPlaceholderText(/pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
