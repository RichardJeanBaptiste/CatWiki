import './App.css';
import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, SvgIcon, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import CatWikiSVG from './assets/CatwikiLogo.svg';



const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: '50%',
    top: '60%',
    borderRadius: '42px',
    width: '90%',
    height: '90%',
    background: '#050709',
    transform: 'translate(-50%, -50%)',
  },
  upperRoot: {
    width:'90%',
    height: '45%',
  },
  imageIcon: {
    height: '75px',
  },
  iconRoot: {
    textAlign: 'center',
  }

})

function CatIcon() {
  const classes = useStyles();

  return (
    <Icon className={classes.iconRoot} >
      <img className={classes.imageIcon} src={CatWikiSVG} alt="cat logo"/>
    </Icon>
  )
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M120.65 25.886L119.61 29.0067L118.57 32.9596C118.57 32.9596 115.865 34.416 115.657 33.3757C115.449 32.3355 116.697 32.1274 116.697 32.1274L117.113 30.047L113.993 24.4297L120.65 25.886Z" fill="#291507"/>
    </SvgIcon>
  );
}

function App() {
  
  const classes = useStyles();

  return (
    <Box className={classes.root}>

      <Box>
          <HomeIcon style={{fontSize: '100px', color:'white'}}/>
          <Typography variant="p">Get to know more about cat breed</Typography>
      </Box>

      <Box>

      </Box>
    </Box>
  );
}

export default App;
