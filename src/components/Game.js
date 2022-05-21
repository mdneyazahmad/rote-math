import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {Game as GameEngine} from '../game/Game';
import {Event, Events} from '../game/Event';
import ProgressIndicator from './ProgressIndicator';

function Game(props) {
    const gameArgs = {
        gameMode: props.gameMode,
        problemType: props.problemType,
        max: props.max,
        practiceDigit: props.practiceDigit,
    };
    const game = React.useRef(new GameEngine(gameArgs)).current;
    const [problem, setProblem] = React.useState("");
    const [score, setScore] = React.useState(0);

    const onProblemLoaded = () => {
        setProblem(game.currentProblem.questionMasked);
    }

    const onScoreChanged = () => {
        setScore(game.score);
    }

    const onCorrectAnswer = () => {
        setProblem(game.currentProblem.questionUnmasked);
    }

    const onGameOver = () => {
        alert('Game over');
    }

    React.useEffect(() => {
        const unsubscribe1 = Event.on(Events.ProblemLoaded, onProblemLoaded);
        const unsubscribe2 = Event.on(Events.ScoreChanged, onScoreChanged);
        const unsubscribe3 = Event.on(Events.CorrectAnswer, onCorrectAnswer);
        const unsubscribe4 = Event.on(Events.GameOver, onGameOver);

        game.start();

        return () => {
            unsubscribe1();
            unsubscribe2();
            unsubscribe3();
            unsubscribe4();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Box sx={{marginTop: 6, marginBottom: 20}}>
            <Typography variant="h2" component="h1" sx={{textAlign: 'center'}}>
                {problem}
            </Typography>
            <Box sx={{my: 4}}>
                <ProgressIndicator game={game} />
            </Box>
            <Typography variant="h5" component="h5" sx={{textAlign: 'right'}}>Score: {score}</Typography>
            <Stack direction="row" spacing={1}>
                {game.allPossibleSolutions.map((solution, index) => (
                    <Button key={index} variant="contained" onClick={() => game.trySolution(solution)}>{solution}</Button>
                ))}
            </Stack>
        </Box>
    );
}

export default Game;