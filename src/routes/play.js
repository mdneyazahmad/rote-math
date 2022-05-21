import * as React from 'react';
import GamePickerForm from "../components/GamePickerForm";
import Game from '../components/Game';

function Play() {
    const [gameOptions, setGameOptions] = React.useState(null);
    
    if(!gameOptions) {
        return <GamePickerForm startGame={(options) => setGameOptions(options)} />;
    }

    return <Game {...gameOptions} />
}

export default Play;
