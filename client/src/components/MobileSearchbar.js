import { React, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField,  Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        borderRadius: '59px',
        borderStyle: 'hidden',
        width: '35%',
        height: '50px',
    },
    modalStyle: {
        backgroundColor: 'white',
        borderRadius: '12px',
        width: '17em',
        height: '25em',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    modalSearchBar: {
        borderRadius: '59px',
        width: '85%',
        marginLeft: '8%',
        marginTop:'7%',
    },
    searchBoxStyle: {
        backgroundColor: 'white',
        borderRadius: '24px',
        marginTop: '2%',
        width: '100%',
        height: '160px',
    },
    listContainer: {
        width: '70%',
        height: '15em',
        overflow: 'hidden',
        overflowY: 'scroll'
    },
    listStyle: {
        marginLeft: '-2%',
        listStyle: 'none',
        fontSize: '18px',
        marginBottom: '2%',
        lineHeight: '22px',
    },
})

function SearchAdornment() {
    return (
            <InputAdornment position="end">
                <SearchIcon/>
            </InputAdornment>
        
    )
}



export default function MobileSearchBar(){
    const classes = useStyles();
    const [open, setOpen ] = useState(false);
    

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


   
  

    function SearchModal() {

        const [inputText, setInputText] = useState([]);

        function handleInputChange(e){

            if(e.target.value !== ""){
                fetch(`/search/${e.target.value}`)
                    .then(response => response.json())
                    .then(data => {
                        setInputText(data)
                    })
            }
        }

        function SearchResults() {

            function Search(props){
                const colors = ["#FFFFFF", "rgba(151, 151, 151, 0.1)"]
                const [hoverBackground, setHoverBackground] = useState(colors[0])

                const routeLink = `/Info/${props.catName}`;

                return (
                    <li
                        style={{listStyle:'none',backgroundColor: hoverBackground}}
                        onMouseOver={() => {setHoverBackground(colors[1])}}
                        onMouseLeave={() => {setHoverBackground(colors[0])}}
                    >
                        <Link to={routeLink} style={{listStyle: 'none', textDecoration:'none', color: 'black'}}>
                            {props.catName}
                        </Link>
                    </li>
                )
            }

            return (
                <Box className={classes.searchBoxStyle}>
                    <ul className={classes.listContainer}>
                        {inputText.map((name, i) => {
                            return(
                                <Search
                                    key={i}
                                    className={classes.listStyle} 
                                    catName={name}
                                />
                            )
                        })} 
                    </ul>
                               
                </Box>
            )
        }

        return (
            <>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box className={classes.modalStyle}>
                        <Box style={{ background: 'rgba(151, 151, 151, 0.1)', borderRadius:'8px', width: '15%', height: '10%', marginTop:'4%', marginLeft: '80%'}} onClick={handleClose}>
                            <Typography style={{ position: 'relative', top: '23%'}} align='center'>X</Typography>
                        </Box>
                        <TextField
                            className={classes.modalSearchBar}
                            variant = 'outlined'
                            placeholder=''
                            InputProps = {{
                                endAdornment: <SearchAdornment/>
                            }}
                            onChange={handleInputChange}
                        />
                        <SearchResults/>

                    </Box>
                    
                </Modal>
            </>
        )
    }

    return (
        <>
            <TextField
                className={classes.root}
                variant = 'outlined'
                placeholder= 'Search'
                InputProps={{
                    endAdornment: <SearchAdornment/>,
                }}
                onClick={handleOpen}
            />
            <SearchModal/>
        </>
    )
}