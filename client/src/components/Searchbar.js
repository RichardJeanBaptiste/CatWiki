import { React, useState, useEffect } from 'react';
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
        width: '325px',
        height: '160px',
    },
    listStyle: {
        listStyle: 'none',
    },
    listContainer: {
        width: '275px',
        height: '135px',
        overflow: 'hidden',
        overflowY: 'scroll'
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

    const [inputText, setInputText] = useState([]);

    const [showSearch, setShowSearch] = useState(false);

    const [query, setQuery] = useState("");

    useEffect(() => {

        if(query === ""){
            setShowSearch(false)
        }
     
    },[query,inputText,showSearch])


    function handleInputChange(e) {
        setQuery(e.target.value) 

        if(e.target.value !== ""){
            fetch(`/search/${e.target.value}`)
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    setInputText(data)
                    setShowSearch(true)
                })
        }
    }
  
  
    function SearchResults() {


        if(showSearch){
            return (
                <Box className={classes.searchBoxStyle}>
                    <ul className={classes.listContainer}>
                        {inputText.map((name, i) => {
                            return(
                                <li key={i} className={classes.listStyle}>{name}</li>
                            )
                        })} 
                    </ul>
                               
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

