import "./app.css"; 
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import jwt_decode from "jwt-decode";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";
import tcmp_svg from './assets/tcmp.svg'
import tcmp_png from './assets/tcmp.png'
import tcmp_local_png from './assets/tcmp_local.png'
import Vector_svg from './assets/Vector.svg'
import Vector_png from './assets/Vector.png'
import {AccountBox, Biotech, CloudDownload, CloudDownloadOutlined, ExpandCircleDown, InfoOutlined, LocalHospital, SettingsPower, TouchApp, WarningAmber} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
import Collapsible from 'react-collapsible';
import Portfolio from './Scripts/Portfolio/Portfolio'
import Enyata_video from './Scripts/Portfolio/assets/video/Enyata_video.mp4'
import resume_file from './Scripts/Portfolio/assets/jibolashittubolu@gmail.com.pdf'

export const useNavToPrev = (url) => {
  //the current page you want displayed in the address bar is url
    const location = useLocation()

    useEffect(()=> {
        // const location = useLocation()
        // if we do not want to use the Navigate router-dom stuff
        // but rather render our own component
        location.pathname= String(url)  
        window.history.replaceState({}, '', String(url)  );
        // window.history.pushState('', 'logins', '/login');//deprecated pushState()
      })

      return {location};
}



let APPS = [
  {
    site: 'http://test.oautcmp.org', 
    alias: '(TEST)',
    variants: [
      {
        code: 'clientside',
        url: '/deploy/tcmp_client_test',
        deploymentID: 1,
        last_deployment_success: ''
      },
      {
        code: 'serverside',
        url: '/deploy/tcmp_api_test/',
        deploymentID: 2,
        last_deployment_success: ''

      }
    ]
  },
  {
    site: 'http://oautcmp.org', 
    alias: '(PRODUCTION)',
    variants: [
      {
        code: 'clientside',
        url : '/deploy/tcmp_client_production/',
        deploymentID: 3,   
        last_deployment_success: ''

      },
      {
        code: 'serverside',
        url: '/deploy/tcmp_api_production/',
        deploymentID: 4,
        last_deployment_success: ''

      }
    ]
  }
]


const VideoApp = () => {
  return (
    <div 
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <video height='80%' width="99%" controls>
        <source src={Enyata_video} type='video/mp4' />
      </video>
    </div>
  )
}

const ResumeDownloadPage = () => {
  return (
    <div    
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <iframe src={resume_file} width="100%" height='100%' title="Resume" >
        </iframe>
    </div>
   )
}

const App = () => {
  return(
      <BrowserRouter>
        <Routes>
            <Route path="/">
              <Route 
              index 
              element={
                  <Portfolio />
                } />
              </Route>
              
              <Route path="my-enyata-video">
                <Route 
                index 
                element={<VideoApp />}
                />
              </Route>

              <Route path="my-resume">
                <Route 
                index 
                element={<ResumeDownloadPage />}
                />
              </Route>

        </Routes>
      </BrowserRouter>
  )
}

const Appo = () => {
  return(
      <VideoApp />

  )
}

// export default App;
export default App;
