import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import HeroImageLg from '../assets/HeroImagemd.png';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import CatWiki from '../components/CatWikiIcon';
import SearchBar from '../components/Searchbar';
import Header from './Header';
import Footer from './Footer';



const useStyles = makeStyles({
    root: {
      position: 'absolute',
      left: '50%',
      top:'43em',
      transform: 'translate(-50%, -50%)',
      width: '75em',
      height: '70em',
      minHeight: '100vh',
      backgroundColor: '#E3E1DC',
      borderRadius: '42px',
    },
    header: {
      position: 'absolute',
      top: '.5em',
      left: '3%',
      height: '112px',
      width: '100%',
    },
    upperRoot: {
      width:'100%',
      height: '40%',
      background: `url(${HeroImageLg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '42px 42px 0px 0px',
    },
    bottomStyle: {
      marginLeft: '-3%'
    },
    titleStyle: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      top:'19%',
      left: '13%',
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
            <Grid direction="row" container spacing={0}>
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
        <Box>
          <Box className={classes.header}>
            <Header/>
          </Box>
          <Box className={classes.root}>
              {/** Top half intro page */}
              <Box className={classes.upperRoot}>
                <Box className={classes.titleStyle}>
                    <CatWiki fill='white' width='30%' height='30%'/>
                    <p className={classes.introTextStyle}>{introText}</p>
                    <SearchBar/>
                </Box>
              </Box>
              {/** Bottom half intro page */} 
              <Box>
                  <Typography 
                    style={{fontSize: '18px', color: '#291507', position:'relative', top:'2em', left: '7em'}}
                  >
                  Most Searched Breeds
                  </Typography>

                  <Typography
                    style={{fontSize: '48px', fontWeight:'bold', whiteSpace: 'pre-wrap', color: '#291507', marginTop: '7%', marginLeft:'9%'}}
                  >
                      {subHeadingText}
                  </Typography>

                  
                  <Box style={{ display: 'flex', flexDirection: 'row', marginLeft: '85%'}}>
                      <Link to="/Most" style={{ textDecoration:'none', color:'rgba(41, 21, 7, 0.6)'}}>
                          <Typography >SEE MORE</Typography>
                      </Link>
                  </Box>

                  <Box style={{marginTop: '5%', marginLeft:'9%'}}>
                    <ImageRow/>
                  </Box>

                   {/** Lower */}
                   <Box className={classes.bottomStyle}> 
                    <Box style={{display: 'flex', flexDirection:'row', marginTop: '20%', marginLeft:'10%'}}>
                        <Box>
                            <Typography style={{width:'12em',fontSize:'48px',lineHeight:'58.51px',fontWeight:'bold', whiteSpace:'pre-wrap',color: '#291507'}}>{"Why should you \nhave a cat?"}</Typography>
                            <Typography style={{marginTop:'10%',fontSize:'18px', lineHeight:'21.94px',color:'#291507',whiteSpace:'pre-wrap'}}>{"Having a cat around you can actually trigger the \nrelease of calming chemicals in your body which \nlower your stress and anxiety leves"}</Typography>
                            <Typography style={{marginTop:'15%',fontSize:'18px', lineHeight:'22px', color:'rgba(41, 21, 7, 0.6)'}}>READ MORE</Typography>

                        </Box>

                        <Box style={{width:'32em'}}>
                            <img style={{ position:'relative', top:'-31%', left:'-7%'}}src={Image2} alt="stock 2" width="273.52px" height="167.08px"/>
                            <img src={Image3} alt="stock 3" width="238.47px" height="385.87px"/> 
                            <img style={{ position:'relative', top:'-29%', left:'8%'}}src={Image1} alt="stock 1" width="195.49px" height="293.24px"/>
                        </Box>
                    </Box>
                   </Box>
                     
              </Box>
              
          </Box>
          
          
        </Box>
        
    )
}


/*

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



*/
