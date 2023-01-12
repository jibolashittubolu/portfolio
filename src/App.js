import "./app.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Portfolio from './Scripts/Portfolio/Portfolio'
import Enyata_video from './Scripts/Portfolio/assets/video/Enyata_video.mp4'
import resume_file from './Scripts/Portfolio/assets/jibolashittubolu@gmail.com.pdf'



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


// export default App;
export default App;
