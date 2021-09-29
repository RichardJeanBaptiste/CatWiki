import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles({
    header: {
        marginTop:'-3%',
        marginLeft:'6%',
    }
})

export default function MostSearched(){
    
    const classes = useStyles();

    const [ mostSearched , setMostSearched ] = useState([]);

    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {

        fetch('/most_searched/10')
            .then(response => response.json())
            .then(data => {
            //console.log(data)
            setMostSearched(data)
            setIsLoaded(true)
            console.log(isLoaded)
        })

    // eslint-disable-next-line
    },[])


    function ImageInfo(){

        let count = 1;

        if(isLoaded){
            return (
            <>
                {mostSearched.map((data, i) => {

                    let catname = `${count}. ${data.name}`;
                    count += 1;
                    return(
                        <Box style={{display:'flex', flexDirection:'row' , marginTop:'4%'}} key={i}>
                            <img style={{borderRadius:'24px'}} src={data.url} alt="" width="170px" height="170px"/>
                            <Box style={{ display:'flex', flexDirection:'column', marginLeft:'5%'}}> 
                                <Typography style={{fontSize:'36px', fontWeight:'bold',lineHeight:'44px', color:'#291507'}}>{catname}</Typography>
                                <Typography style={{marginTop:'4%', fontSize:'18px', lineHeight:'22px', color:'#291507'}}>{data.description}</Typography>
                            </Box>
                        </Box>
                    )
                })} 
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
            <Typography style={{fontSize:'36px', lineHeight:'44px', fontWeight:'bold', color: '#291507', marginLeft:'6%', marginTop:'-2%'}}  >Top 10 most searched breeds</Typography>
            <Box style={{marginTop:'1%',marginLeft:'6%', width:'85vw', height:'40em', overflow:'scroll'}}>
                <ImageInfo/>
            </Box>

            <Footer/>
            
        </Box>
    )
}

