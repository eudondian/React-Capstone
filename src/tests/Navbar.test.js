import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Renderer from 'react-test-renderer';
import { Navbar } from '../components';

function TestHeader() {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

it('Navbar displays', () => {
  const tree = Renderer
    .create(<TestHeader />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
