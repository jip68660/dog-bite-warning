import React from 'react';
import AddressButton from './AddressButton';
import Home from './Home';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

it('renders correctly', () => {
    const history = createMemoryHistory();
    const tree = renderer
    .create(
        <Router history={history}>
            <Home>
                <AddressButton />
            </Home>
        </Router>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
})