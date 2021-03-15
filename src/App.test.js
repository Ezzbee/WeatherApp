import React from 'react';
import renderer from 'react-test-renderer';


import Forecast from "./Forecast";

it('renders the Forecast component correctly ', () => {
  const tree = renderer.create(<Forecast />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('the status of data return is 200', () => {
  return fetchData().then(data => {
    expect(data.cod).toBe(200);
  });
});
