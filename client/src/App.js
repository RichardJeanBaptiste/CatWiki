import './App.css';
import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import HeroImageLg from './assets/HeroImagemd.png';
import CatWiki from './components/CatWikiIcon';
import SearchBar from './components/Searchbar';



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
  titleStyle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top:'25%',
    left: '15%',
  },
  introTextStyle: {
    whiteSpace: 'pre-wrap',
    fontSize: '24px',
    color: 'white',
  }

})

const introText = " Get to know more about your \n cat breed ";
//#291507

function App() {
  
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CatWiki fill='#291507' width="10%" height="10%"/>

      <Box className={classes.upperRoot}>
          <Box className={classes.titleStyle}>
            <CatWiki fill='white' width='30%' height='30%'/>
            <p className={classes.introTextStyle}>{introText}</p>
            <SearchBar/>
          </Box>
      </Box>

      <Box>

      </Box>
    </Box>
  );
}

export default App;
