import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        borderRadius: '59px',
        borderStyle: 'hidden',
        width: '30%',
    }
})

function SearchAdornment() {
    return (
            <InputAdornment position="end">
                <SearchIcon/>
            </InputAdornment>
        
    )
}

export default function SearchBar() {

    const classes = useStyles();

    const [inputText, setInputText] = useState("");

    function handleInputChange(e) {
        setInputText(e.target.value)
    }
    
    return (
        <>
            <TextField
                className={classes.root}
                variant='outlined'
                placeholder='Enter your breed'
                InputProps={{
                    endAdornment: <SearchAdornment/>,
                  }}
                onChange={handleInputChange}
            />
        </>
    )
}

