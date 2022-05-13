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

function GamePickerForm() {
    const [problemType, setProblemType] = React.useState('addition');
    const [level, setLevel] = React.useState('addition');
    const [gameMode, setGameMode] = React.useState('competition');
    const [practiceNumber, setPracticeNumber] = React.useState('0');

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
                        <MenuItem value="addition">Addition</MenuItem>
                        <MenuItem value="multiplication">Multiplication</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" fullWidth sx={{my: 1}}>
                    <InputLabel id="level">Choose your level</InputLabel>
                    <Select
                        labelId="level"
                        value={level}
                        onChange={e => setLevel(e.target.value)}
                        label="Choose your level"
                    >
                        <MenuItem value="addition">Addition</MenuItem>
                        <MenuItem value="multiplication">Multiplication</MenuItem>
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
                        <MenuItem value="competition">Competition</MenuItem>
                        <MenuItem value="practice">Practice</MenuItem>
                    </Select>
                </FormControl>
                
                {gameMode === "practice" && (
                    <FormControl variant="standard" fullWidth sx={{my: 1}}>
                        <InputLabel id="practiceNumber">Practice Number</InputLabel>
                        <Select
                            labelId="practiceNumber"
                            value={practiceNumber}
                            onChange={e => setPracticeNumber(e.target.value)}
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
                <Button variant="contained">Start</Button>
            </CardActions>
        </Card>
    );
}

export default GamePickerForm;
