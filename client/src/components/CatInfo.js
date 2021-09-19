import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import CatWiki from './CatWikiIcon';



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
        bottom: '-195%',
        left: '51%',
        transform: 'translate(-50%, -50%)',
        width: '68%',
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

    useEffect(() => {

        let data = {
            "name": name,
            "url": ImageList[0].url,
        }

        fetch('/update_search/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
     // eslint-disable-next-line
    },[]);

    return (
            <>
                <Box style={{marginLeft: '3.5%', marginTop:'2%'}}>
                    <Link to={"/"}>
                        <CatWiki fill='#291507' width="10%" height="10%"/>
                    </Link>
                </Box>
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
                        <h3 style={{fontSize: '36px', color:'#291507'}}>Other Photos</h3>
                        <Grid direction="row" container spacing={6}>
                            <Grid item sm={3}><img src={props.ImageList[1].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                            <Grid item sm={3}><img src={props.ImageList[2].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                            <Grid item sm={3}><img src={props.ImageList[3].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                            <Grid item sm={3}><img src={props.ImageList[4].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid> 
                        </Grid>
                        <Grid direction="row" container spacing={6} style={{ marginTop: '2%'}}>
                            <Grid item sm={3}><img src={props.ImageList[5].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                            <Grid item sm={3}><img src={props.ImageList[6].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                            <Grid item sm={3}><img src={props.ImageList[7].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid>
                            <Grid item sm={3}><img src={props.ImageList[8].url} alt="D" width='200' height='220' style={{borderRadius: '24px'}}/></Grid> 
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

    },[isLoaded,id,setCatData,setImageList,setIsLoaded])

    if(isLoaded){

        return (
            <DisplayContent Info={catData} ImageList={imageList} profileImg={profileImg} />
        )
    }else{
        return (
            <>
            </>
        )
    }
}
