import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CatWiki from './CatWikiIcon';

const useStyles = makeStyles({
    root: {
        marginLeft: '3.5%',
        marginTop: '2%',
    }
})

export default function Header() {
    const classes= useStyles();

    return (
        <Box className={classes.root}>
            <Link to="/">
                <CatWiki fill='#291507' width="10%" height="10%"/>
            </Link>
        </Box>
    )
}