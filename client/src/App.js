import './App.css';
import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box,Typography } from '@material-ui/core';
import HeroImageLg from './assets/HeroImagemd.png';
import CatWiki from './components/CatWikiIcon';



const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: '50%',
    top: '60%',
    borderRadius: '42px',
    width: '90%',
    height: '90%',
    transform: 'translate(-50%, -50%)',
  },
  upperRoot: {
    width:'90%',
    height: '83%',
    background: `url(${HeroImageLg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '42px 42px 0px 0px',
  },
  imageIcon: {
    height: '75px',
  },
  iconRoot: {
    textAlign: 'center',
  }

})

//#291507

function App() {
  
  const classes = useStyles();

  return (
    <Box className={classes.root}>

      <Box className={classes.upperRoot}>
          <CatWiki fill='white'/>
          <Typography variant="p" style={{color: 'whitesmoke'}}>Get to know more about cat breed</Typography>
      </Box>

      <Box>

      </Box>
    </Box>
  );
}

export default App;
