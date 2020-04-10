import React from 'react';
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis} from 'react-vis';

const Chart = ({data}) => {
    const playerData = data.map(player => ({x: player.id, y: player.searches}));
    return(
        <div>
            <XYPlot height={300} width={600}>
            <XAxis title='Player ID'/>
            <YAxis title='Player Searches'/>
                <LineSeries data={playerData} />
            </XYPlot>
        </div>
    );
}

export default Chart;