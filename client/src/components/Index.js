import { React } from 'react';
import {
  BrowserView,
  MobileView,
} from 'react-device-detect';
import DesktopIndex from './DesktopIndex';
import MobileIndex from './MobileIndex';


export default function Index(){

  return (
      <>
        <BrowserView>
            <DesktopIndex/>
        </BrowserView>
        <MobileView>
            <MobileIndex/>
        </MobileView>
      </>
  )
  
}

