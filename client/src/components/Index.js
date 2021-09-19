import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import HeroImageLg from '../assets/HeroImagemd.png';
import CatWiki from '../components/CatWikiIcon';
import SearchBar from '../components/Searchbar';
import Header from './Header';
//import Footer from './Footer';



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
    lowerRoot: {
      marginTop: '-25px',
      width: '90%',
      height: '83%',
      backgroundColor: '#E3E1DC',
      borderRadius: '0px 0px 42px 42px',
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
const subHeadingText = " 66+ Breeds For you \n to discover ";




export default function Index() {

    const classes = useStyles();

    const [ mostSearch, setMostSearched ] = useState([]);

    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {

      fetch('/most_searched/4')
        .then(response => response.json())
        .then(data => {
          //console.log(data)
          setMostSearched(data)
          setIsLoaded(true)
        })
      
        // eslint-disable-next-line
    },[])

    function ImageRow(){
  
      if(isLoaded){
        return (
          <>
            <Grid direction="row" container spacing={6} style={{marginTop: '30%'}}>
                <Grid item sm={3}><img src={mostSearch[0].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                <Grid item sm={3}><img src={mostSearch[1].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                <Grid item sm={3}><img src={mostSearch[2].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                <Grid item sm={3}><img src={mostSearch[3].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid> 
            </Grid>
          </>
        )
      }else{
        return (
          <>
          </>
        )
      }
    }

    return (
        <Box className={classes.root}>
          <Header/>
  
        <Box className={classes.upperRoot}>
            <Box className={classes.titleStyle}>
              <CatWiki fill='white' width='30%' height='30%'/>
              <p className={classes.introTextStyle}>{introText}</p>
              <SearchBar/>
            </Box>
        </Box>
        <Box className={classes.lowerRoot}>
          <div style={{marginTop: '25px'}}>
            <Typography 
              style={{fontSize: '18px', color: '#291507',position:'absolute', top:'110%', left:'7%'}}
            >
              Most Searched Breeds
            </Typography>
            <Typography
              style={{fontSize: '48px', whiteSpace: 'pre-wrap', color: '#291507',position:'absolute', top:'120%', left:'7%'}}
            >
              {subHeadingText}
            </Typography>

            <ImageRow/>

          </div>
        </Box>
        
      </Box>
    )
}

