import Grid from '@mui/material/Grid';

import FeatureCard from "./FeatureCard";

const features = [
    {
        title: 'Memorize the Times Tables',
        description: "It's really useful to have the times tables up to 12 permanently etched in your brain. Many schools don't teach this anymore.",
    },
    {
        title: 'Focus on Weak Points',
        description: 'After completing a game, get information about your best and weakest digits with an opportunity to practice them specifically.',
    },
    {
        title: 'Speech Support',
        description: '(Chrome browser only) RoteMath can speak the problems aloud and you can speak the answers!',
    }
];

function FeatureSection() {
    return (
        <Grid container spacing={4}>
            {features.map((feature, index) => (
                <Grid key={index} item sm={4}>
                    <FeatureCard
                        title={feature.title}
                        description={feature.description}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default FeatureSection;
