import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { orange } from '@mui/material/colors';

function Footer() {
  return (
    <Box sx={{color: '#ffffff', backgroundColor: orange[500]}}>
        <Box sx={{paddingTop: 4, paddingBottom: 4}}>
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        <Box>
                            <Typography variant="h5" component="h5" sx={{marginBottom: 1}}>About this Site</Typography>
                            <Typography>
                                My child's school is lovely but they don't teach the times tables anymore. I made this to help her memorize them. Development is ongoing - check us out on Github.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={6}>
                        <Box>
                            <Typography variant="h5" component="h5" sx={{marginBottom: 1}}>Connect</Typography>
                            <Box>
                                <Link href="#" underline="hover" color="inherit" sx={{display: 'block'}}>Github</Link>
                                <Link href="#" underline="hover" color="inherit" sx={{display: 'block'}}>Email me</Link>
                                <Link href="#" underline="hover" color="inherit" sx={{display: 'block'}}>Other helpful math links, maybe</Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        <Box sx={{color: 'rgba(255, 255, 255, 0.8)', backgroundColor: 'rgba(51, 51, 51, 0.08)', paddingTop: 2, paddingBottom: 2}}>
            <Container maxWidth="md">
                <Typography component="div">(c) 2017 James Orr. All Rights Reserved.</Typography>
            </Container>
        </Box>
    </Box>
  );
}

export default Footer;
