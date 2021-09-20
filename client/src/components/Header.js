import { React } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import CatWiki from './CatWikiIcon';


export default function Header() {
    
    return (
        <Link to="/">
            <CatWiki fill='#291507' width="140px" height="140px"/>
        </Link>
    )
}