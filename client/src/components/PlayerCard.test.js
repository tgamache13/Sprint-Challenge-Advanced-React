import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from './PlayerCard';

const testPlayer = {
    name: 'test',
    country: 'test country',
    searches:  1234,
    id: 123
}

test('renders without crashing', () => {
    rtl.render(<PlayerCard player={testPlayer} />);
});
test('props are working', () => {
    const player = rtl.render(<PlayerCard player={testPlayer}/>);
    player.getByText(/Player: test/);
    player.getByText(/From: test country/);
    player.getByText(/Number of Searches: 1234/);
    player.getByText(/ID Number: 123/);
});