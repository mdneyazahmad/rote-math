import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {GameMode} from '../game/Game';
import {ProblemType} from '../game/Problem';

function GamePickerForm(props) {
    const [problemType, setProblemType] = React.useState(ProblemType.Addition);
    const [level, setLevel] = React.useState(3);
    const [gameMode, setGameMode] = React.useState(GameMode.Competitive);
    const [practiceNumber, setPracticeNumber] = React.useState(3);

    const startGame = () => {
        const gameOptions = {
            gameMode,
            problemType,
            max: level,
            practiceDigit: practiceNumber,
        }

        props.startGame(gameOptions);
    }

    return (
        <Card sx={{my: 4}}>
            <CardHeader title="Pick your Game!" />
            <CardContent>
                <FormControl variant="standard" fullWidth sx={{my: 1}}>
                    <InputLabel id="problemType">Proplem Type</InputLabel>
                    <Select
                        labelId="problemType"
                        value={problemType}
                        onChange={e => setProblemType(e.target.value)}
                        label="Proplem Type"
                    >
                        <MenuItem value={ProblemType.Addition}>Addition</MenuItem>
                        <MenuItem value={ProblemType.Multiplication}>Multiplication</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" fullWidth sx={{my: 1}}>
                    <InputLabel id="level">Choose your level</InputLabel>
                    <Select
                        labelId="level"
                        value={level}
                        onChange={e => setLevel(parseInt(e.target.value))}
                        label="Choose your level"
                    >
                        <MenuItem value="3">White Belt (up to 3)</MenuItem>
                        <MenuItem value="6">Yellow Belt (up to 6)</MenuItem>
                        <MenuItem value="9">Brown Belt (up to 9)</MenuItem>
                        <MenuItem value="12">Black Belt! (up to 12)</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" fullWidth sx={{my: 1}}>
                    <InputLabel id="gameMode">Game Mode</InputLabel>
                    <Select
                        labelId="gameMode"
                        value={gameMode}
                        onChange={e => setGameMode(e.target.value)}
                        label="Game mode"
                    >
                        <MenuItem value={GameMode.Competitive}>Competition</MenuItem>
                        <MenuItem value={GameMode.Practice}>Practice</MenuItem>
                    </Select>
                </FormControl>
                
                {gameMode === GameMode.Practice && (
                    <FormControl variant="standard" fullWidth sx={{my: 1}}>
                        <InputLabel id="practiceNumber">Practice Number</InputLabel>
                        <Select
                            labelId="practiceNumber"
                            value={practiceNumber}
                            onChange={e => setPracticeNumber(parseInt(e.target.value))}
                            label="Practice Number"
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(number => (
                                <MenuItem key={number} value={number}>{number}</MenuItem>
                            ))}
                            
                        </Select>
                    </FormControl>
                )}
            </CardContent>
            <CardActions>
                <Button variant="contained" onClick={startGame}>Start</Button>
            </CardActions>
        </Card>
    );
}

export default GamePickerForm;
