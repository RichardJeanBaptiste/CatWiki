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
    },
    searchBoxStyle: {
        backgroundColor: 'white',
        borderRadius: '24px',
        marginTop: '2%',
        width: '365px',
        height: '350px',
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

    const [showSearch, setShowSearch] = useState(false);

    function handleInputChange(e) {

        if(e.target.value === ""){
            setInputText("")
            setShowSearch(false)
            return
        }

        fetch(`/search/${e.target.value}`)
            .then(response => response.text())
            .then(data => {
                console.log(data)
                setShowSearch(true)
                setInputText(data)
            })     
    }

    function SearchResults() {

        

        if(showSearch){
            return (
                <Box className={classes.searchBoxStyle} onMouseLeave={() => setShowSearch(false)}>
                    {inputText}
                </Box>
            )
        }

        return <></>
        
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
            <SearchResults/>
        </>
    )
}

