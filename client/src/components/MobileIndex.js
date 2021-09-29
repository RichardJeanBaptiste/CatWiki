import { React, useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Header from './Header';
import SmallHeroImg from '../assets/HeroImagesm.png';
import CatWiki from './CatWikiIcon';
import MobileSearchBar from './MobileSearchbar';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';

const useStyles = makeStyles(theme => ({
    root: {
      fontSize: '4rem',
      texAlign: 'center',
      [theme.breakpoints.up('md')]: {
          color: 'red'
      }
    },
    header: {
        marginTop:'1%',
        marginLeft: '6%',
    },
    topBox: {
        [theme.breakpoints.up('md')]: {
            width: '95em',
            height: '70em',
            marginLeft: '10%',
        },
        [theme.breakpoints.down('md')]: {
            width: '21em',
            height: '37em',
            marginLeft: '9%',
            marginTop: '-7%',
        },
        borderRadius: '42px',
        backgroundColor: '#E3E1DC',
    },
    topBoxUpper: {
        [theme.breakpoints.down('md')]: {
            width: '100%',
            background:`url(${SmallHeroImg})`,
            height: '30%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '42px 42px 0px 0px',
        },  
    },
    titleStyle: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            position: 'relative',
            top: '7%',
            left: '7%'
        }
    },
    titleTextStyle: {
        color: 'white',
        whiteSpace: 'pre-wrap',
        [theme.breakpoints.down('md')]: {
            fontSize: '10px',
            lineHeight: '12px',
            marginTop: '4%',
        },
    }
  })
)


export default function MobileIndex(){

    const theme = useTheme();
    const classes = useStyles(theme);

    const [ ImageList, setImageList ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {

        fetch('/most_searched/4')
          .then(response => response.json())
          .then(data => {
            //console.log(data)
            setImageList(data)
            setIsLoaded(true)
          })
        
          // eslint-disable-next-line
      },[])

      function ImageRow(){
  
        if(isLoaded){
          return (
            <>
              <Grid direction="row" container spacing={3}>
                    <Grid item sm={3}><img src={ImageList[0].url} alt="D" width='120' height='120' style={{borderRadius: '12px'}}/></Grid>
                    <Grid item sm={3}><img src={ImageList[1].url} alt="D" width='120' height='120' style={{borderRadius: '12px'}}/></Grid> 
              </Grid>
              <Grid direction="row" container spacing={3}>
                    <Grid item sm={3}><img src={ImageList[2].url} alt="D" width='120' height='120' style={{borderRadius: '12px'}}/></Grid>
                    <Grid item sm={3}><img src={ImageList[3].url} alt="D" width='120' height='120' style={{borderRadius: '12px'}}/></Grid>
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
            {/**  HEADER */}
            <Box className={classes.header}>
              <Header/>
            </Box>  

            {/** TOP */}
            <Box className={classes.topBox}>
                <Box className={classes.topBoxUpper}>
                    <Box className={classes.titleStyle}>
                        <CatWiki fill='white' width='30%' height='30%'/>
                        <Typography className={classes.titleTextStyle}>{"Get to know more about \nyour cat breed"}</Typography>
                        <Box style={{marginTop:'3%', marginLeft:'-2%'}}>
                            <MobileSearchBar />
                        </Box>
                        
                    </Box>
                    {/** TOP 2 */}
                    <Box style={{ position: 'relative', top:'3.5em', left:'5%'}}>
                        <Typography style={{ fontSize: '12px', lineHeight:'14px', color: '#291507', fontWeight:'500'}}>Most Searched Breeds</Typography>
                        <Box style={{ width:'41px', height: '3px',backgroundColor: '#4D270C', borderRadius:'77px', marginTop:'2%'}}/>
                        <Typography style={{ fontSize: '18px', lineHeight: '22px', color:'#291507', whiteSpace:'pre-wrap', fontWeight:'bold', marginTop:'6%'}}>{"66+ Breeds For you \nto discover"}</Typography>

                        <Box style={{ marginLeft: '6%', marginTop:'4%'}}>
                            <ImageRow/>
                        </Box>
                    </Box>
                </Box>  
            </Box>

            <Box>
              <Box style={{backgroundColor:'#4D270C', borderRadius:'77px', width:'51px', height:'3px', marginTop:'10%', marginLeft:'10%'}}/>
              <Typography style={{ marginTop:'5%', marginLeft:'10%', color:'#291507', fontWeight:'bold', fontSize:'40px', lineHeight:'49px', whiteSpace:'pre-wrap'}}>{'Why should \nyou have a cat?'}</Typography>
              <Typography
                style={{
                  color: '#291507',
                  fontWeight: '500',
                  fontSize:'18px',
                  lineHeight:'22px',
                  marginTop: '10%',
                  marginLeft: '10%'
                }}
              >{'Having a cat around you can actually \ntrigger the release of calming \nchemicals in your body which lower \nyour stress and anxiety leves'}</Typography>
              <Box style={{marginTop: '10%', width: '90%'}}>
                  <img src={Image2} alt={'Stock 2'} width="172px" height="105px" style={{ position: 'relative', top:'-8.5em', left:'10%', borderRadius:'24px'}}/>
                  <img src={Image3} alt={'Stock 3'} width="149px" height="242px" style={{ position: 'relative', top:'-1%', left:'17%', borderRadius:'24px'}}/>
                  <img src={Image1} alt={'Stock 1'} width="123px" height="184px" style={{ position: 'relative', top: '-7em', left:'5em', borderRadius:'24px'}}/>
              </Box>
            </Box>
            
            
        </Box>
    );
}