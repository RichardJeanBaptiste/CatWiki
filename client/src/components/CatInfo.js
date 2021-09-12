import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, } from '@material-ui/core';
import Header from './Header';
//import Footer from './Footer';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: '19%',
        top: '15%',
    },
    profImageStyle: {
        borderRadius: '24px',
        width: '20em',
        height: '20em',
        marginLeft:'-5%',
    },
    infoStyle: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10%',
        marginTop: '-5%'
    },
    dataBarStyle: {
        width: '60px',
        height: '12px',
        borderRadius: '8px',
        marginRight: '2%',
    },
    photoRowStyle: {
        position: 'absolute',
        bottom: '-125%',
        left: '12%'
    },
    imageStyle: {
        width: '14em',
        height: '12em',
        borderRadius: '24px',
    }
})

function DataBar(props) {

    const classes = useStyles();

    const [title, count] = props.info;

    function changeBackground(num){
        if(num <= count){
            return '#544439'
        }else{
            return '#E0E0E0'
        }

    }
   

    return (
        <>
            <Box style={{display: 'flex', flexDirection:'row', marginTop:'2%'}}>
                <p style={{fontWeight:'bold'}}>{title}:</p>
                <Box style={{display: 'flex', flexDirection:'row', marginLeft:'5%', marginTop:'2.2%'}}>
                    <Box className={classes.dataBarStyle} style={{backgroundColor: changeBackground(1)}}/>
                    <Box className={classes.dataBarStyle} style={{backgroundColor: changeBackground(2)}}/>
                    <Box className={classes.dataBarStyle} style={{backgroundColor: changeBackground(3)}}/>
                    <Box className={classes.dataBarStyle} style={{backgroundColor: changeBackground(4)}}/>
                    <Box className={classes.dataBarStyle} style={{backgroundColor: changeBackground(5)}}/>  
                </Box>
                
            </Box>
        </>
    )
}



function DisplayContent(props) {

    const classes = useStyles();

    const [ name, desc, temper, origin, lifeSpan, adaptability, affection, childFriendly, grooming, intelligence, healthIssues, socialNeeds, strangerFriendly] = props.Info;

    const ImageList = props.ImageList;

    return (
            <>
                <Header/>
                <Box className={classes.root}>
                    <img className={classes.profImageStyle} src={props.profileImg} alt=""/>
                    <Box className={classes.infoStyle}>
                        <p style={{color: '#291507', fontSize:'55px', fontStyle:'normal'}}>{name}</p>
                        <p style={{marginTop:'-2.5%', width: '65%'}}>{desc}</p>
                        <Box style={{display: 'flex', flexDirection:'row'}}>
                            <p style={{fontWeight:'bold'}}>Temperament: </p>
                            <p style={{marginLeft: '1.5%'}}> {temper}</p>
                        </Box>
                        <Box style={{display: 'flex', flexDirection:'row'}}>
                            <p style={{fontWeight:'bold'}}>Origin: </p>
                            <p style={{marginLeft: '1.5%'}}>{origin}</p>
                        </Box>
                        <Box style={{display: 'flex', flexDirection:'row'}}>
                            <p style={{fontWeight:'bold'}}>Life Span: </p>
                            <p style={{marginLeft: '1.5%'}}>{lifeSpan}</p>
                        </Box>
                        <DataBar info={["Adaptability", adaptability]}/>
                        <DataBar info={["Affection level", affection]}/>
                        <DataBar info={["Child Friendly", childFriendly]}/>
                        <DataBar info={["Grooming", grooming]}/>
                        <DataBar info={["Intelligence", intelligence]}/>
                        <DataBar info={["Health Issues", healthIssues]}/>
                        <DataBar info={["Social needs", socialNeeds]}/>
                        <DataBar info={["Stranger friendly", strangerFriendly]}/>
                    </Box>
                </Box>  
                    <Box className={classes.photoRowStyle}>
                        <h2 style={{color:'#291507', fontSize: '36px', fontStyle:'normal'}}>Other Photos</h2>
                        <Grid direction="row" container spacing={6}>
                            <Grid item sm={3}><img src={ImageList[0].url} alt="" className={classes.imageStyle}/></Grid>
                            <Grid item sm={3}><img src={ImageList[1].url} alt="" className={classes.imageStyle}/></Grid>
                            <Grid item sm={3}><img src={ImageList[2].url} alt="" className={classes.imageStyle}/></Grid>
                            <Grid item sm={3}><img src={ImageList[3].url} alt="" className={classes.imageStyle}/></Grid> 
                        </Grid>
                        <Grid direction="row" container spacing={6} style={{marginTop: '1.5%'}}>
                            <Grid item sm={3}><img src={ImageList[4].url} alt="" className={classes.imageStyle}/></Grid>
                            <Grid item sm={3}><img src={ImageList[5].url} alt="" className={classes.imageStyle}/></Grid>
                            <Grid item sm={3}><img src={ImageList[6].url} alt="" className={classes.imageStyle}/></Grid>
                            <Grid item sm={3}><img src={ImageList[7].url} alt="" className={classes.imageStyle}/></Grid> 
                        </Grid>
                    </Box>
                    
            </>
            )
}



export default function CatInfo(props) {

    //const classes = useStyles();

    let { id } = useParams()


    const [ catData, setCatData ] = useState([])

    const [ imageList, setImageList ] = useState([])

    const [ isLoaded, setIsLoaded ] = useState(false)

    const [ profileImg, setProfileImg ] = useState("");

    const [ name, setName ] = useState("");

    const [ desc, setDesc ] = useState("");

    const [ temper, setTemper ] = useState("");
    
    useEffect(() => {

        if(!isLoaded){
            
            fetch(`/find/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)

                    let x = []
                    x.push(data[0].name)
                    x.push(data[0].description)
                    x.push(data[0].temperament)
                    x.push(data[0].origin)
                    x.push(data[0].life_span)
                    x.push(data[0].adaptability)
                    x.push(data[0].affection_level)
                    x.push(data[0].child_friendly)
                    x.push(data[0].grooming)
                    x.push(data[0].intelligence)
                    x.push(data[0].health_issues)
                    x.push(data[0].social_needs)
                    x.push(data[0].stranger_friendly)
                    setCatData(x)
                })
            
            fetch(`/images/${id}`)
                .then(response => response.json())
                .then(data => {
                    setProfileImg(data[0].url)
                    setImageList(data)
                })
                .then(() => {
                    setIsLoaded(true)
                })
        }

    },[isLoaded,id,setCatData,setImageList,setIsLoaded,setName, setDesc, setTemper])

    if(isLoaded){

        return (
            <DisplayContent Info={catData} profileImg={profileImg} ImageList={imageList} name={name} description={desc} temperament={temper}/>
        )
    }else{
        return (
            <>
            </>
        )
    }
}

/*


<Typography>Other Photos</Typography>
                <Grid direction="row" container spacing={3}>
                    <Grid item md={6} sm={3}>
                        D
                    </Grid>
                    <Grid item md={6} sm={3}>
                        E
                    </Grid>
                    <Grid item md={6} sm={3}>
                        F
                    </Grid>
                    <Grid item md={6} sm={3}>
                        G
                    </Grid>
                </Grid>
*/