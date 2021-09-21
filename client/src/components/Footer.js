import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CatWiki from './CatWikiIcon';

const useStyles = makeStyles({
    root: {
        position:'fixed',
        bottom: '0',
        left: '8%',
        marginTop:'10%',
        backgroundColor: 'black',
        borderRadius: '42px 42px 0px 0px',
        width:'80vw',
        height: '12vh',
    },
    innnerRoot: {
        display: 'flex',
        flexDirection: 'row',
    },
    iconStyle: {
        marginLeft: '3%',
        marginTop: '2.5%',
    }
})


export default function Footer() {

    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Box className={classes.innnerRoot}>
                    <Box className={classes.iconStyle}>
                        <CatWiki fill='white' width='35%' height='35%'/>
                    </Box>
                    <p style={{ color:'white', fontSize:'18px', fontStyle: 'normal', marginLeft: '-30%', marginTop: '3.5%'}}>created by Richinbk - devChallenge.io 2021</p>
                </Box> 
            </Box>
        </>
    )
}