import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles({
    header: {
        marginTop:'1%',
        marginLeft:'6%',
    }
})

export default function MostSearched(){
    
    const classes = useStyles();

    const [ CatList , setCatList ] = useState([]);

    useEffect(() => {


    // eslint-disable-next-line
    },[])

    return (
        <>
           <Box className={classes.header}>
                <Header/>
          </Box>
          <Typography style={{fontSize:'36px', lineHeight:'44px', fontWeight:'bold', color: '#291507', marginLeft:'6%'}}>Top 10 most searched breeds</Typography>
          <Box>

          </Box>
        </>
    )
}