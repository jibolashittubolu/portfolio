import './portfolio.css'
import Toggle from './components/Toggle/Toggle'
import { ThemeContextProvider } from './contexts/ThemeContext'
import { themePickers } from './utils/Utils'
import resume_file from './assets/jibolashittubolu@gmail.com.pdf'
import { useTheme } from './contexts/ThemeContext'

const h1 = ({children, style}) => {
    return(
        <h1 
        style={themePickers(style)}
        >
            {children}
        </h1>
    )
}

const H2 = ({children, style}) => {
    return(
        <h2
        style={themePickers(style)}
        >
            {children}
        </h2>
    )
}

const section = ({children, style}) => {
    return(
        <section 
        style={themePickers(style)}
        >
            {children}
        </section>
    )
}

const li = ({children, style}) => {
    return(
        <li
        style={themePickers(style)}
        >
            {children}
        </li>
    )
}

const LI = ({children, style}) => {
    return(
        <li
        style={themePickers(style)}
        >
            {children}
        </li>
    )
}

const ul = ({children, style}) => {
    return(
        <ul
        style={themePickers(style)}
        >
            {children}
        </ul>
    )
}

const A = ({children, style, href,download, target}) => {
    return(
        <a
        style={themePickers(style)}
        href={href}
        download={download}
        target={target}
        >
            {children}
        </a>
    )
}

const P = ({children, style, href}) => {
    return(
        <p
        style={themePickers(style)}
        href={href}
        >
            {children}
        </p>
    )
}

const p = ({children, style}) => {
    return(
        <p 
        style={themePickers(style)}
        >
            {children}
        </p>
    )
}



const span = ({children, style}) => {
    return(
        <span
        style={themePickers(style)}
        >
            {children}
        </span>
    )
}

const SPAN = ({children, style}) => {
    return(
        <span
        style={themePickers(style)}
        >
            {children}
        </span>
    )
}

const div  = ({children, style}) => {
    return(
        <div
        style={themePickers(style)}
        >
            {children}
        </div>
    )
}

const DIV  = ({children, style}) => {
    return(
        <div
        style={themePickers(style)}
        >
            {children}
        </div>
    )
}




const AppInt = () => {
  const {theme} = useTheme()

//   console.log(theme)\

const ADIV  = ({children, style, className}) => {
    return(
        <div
        className={className}
        style={{border: `1px solid ${themePickers().borderColor}`}}
        >
            {children}
        </div>
    )
}
  
  return (
        <div className='main-box' 
        style={themePickers({width:'100%', height:'100%'})}>
            <div 
            id="container--main" 
            >
                <Toggle />
                <section 
                id="wrapper--hero" className="section--page">
                    {/* <img id="profile-pic" src="./assets/images/profile_pic.jpg"> */}

                    <div 
                    >
                        <h1 style={{fontSize:'48px', lineHeight: '1em'}} >
                            Moboluwarin Jibola-Shittu
                        </h1>
                        <p 
                        
                        id="bio">Fullstack (backend heavy) developer and a cross-functionally adaptive team player.
                        </p>
                        <A
                        id="email"
                        style={{cursor:'pointer'}}
                        href="mailto:jibolashittubolu@gmail.com"
                        >👉 jibolashittubolu@gmail.com</A>
                    </div>  
                </section>

                <section className="section--page"
                >
                    <div 
                    id="socials--list">
                        <A 
                        href="https://www.linkedin.com/in/jibolashittubolu/" target="_blank" rel='noreferrer'>Linkedin</A>
                        <A 
                        href="https://twitter.com/mazithechief" target="_blank" rel='noreferrer'>Twitter</A>
                        <A 
                        href="https://github.com/jibolashittubolu" target="_blank" rel='noreferrer'>Github</A>
                        <A 
                        download
                        href={resume_file} target="_blank">Download Resume</A>
                    </div>
                </section>

                <section 
                className="section--page"
                >
                    <h2
                    >Skills & Qualifications</h2>
                    <ul id="qualifications--list"
                    
                    >
                        <li
                        
                        >✔️ 4+ Years learning experience with front & backend development</li>
                        <li
                        
                        >✔️ Proficient knowledge in API & Database Design.</li>
                        <li
                        
                        >✔️ Backend Proficient, Server and API deployment</li>
                                                <li
                        
                        >✔️ Quick grasp of emerging technologies and stacks</li>
                        <li
                        
                        >✔️ Fullstack (React, Node.js, MongoDB, Express, Next, PostgreSQL, Frontend, Backend, API)</li>
                    </ul>
                </section>

                <section className="section--page"
                
                >
                    <H2
                    
                    >Tech stacks</H2>

                    <div id="wrapper--techstack__items"
                    
                    >
                        <ADIV style={{color: 'red'}} className="card--techstack"
                        
                        >
                        
                        React, Next JS</ADIV>
                        <ADIV className="card--techstack"
                    
                        >
                        
                        JavaScript, NodeJS, Express</ADIV>
                        <ADIV className="card--techstack"
                        
                        >
                        
                        SQL, MongoDB, Python</ADIV>
                        <ADIV className="card--techstack"
                        
                        >
                        
                        SASS, SCSS, Material-UI, Bootstrap</ADIV>
                    </div>
                </section>

                <section id="work-history-wrapper" className="section--page"
                
                >
                    <h2
                
                    >Work History</h2>

                    <div className="line-break"
                
                    ></div>
                <div className="card--work-history"
                
                >
                    <strong
            
                    >🚧 Backend Developer Intern, EkaaboAfrica.com</strong>
                    <p
            
                    >06/2022 - 12/2022</p>
                    <p
            
                    >
                        Performed Ubuntu Server Integrations and Deployment <br/>
                        Developed APIs <br />
                        Scheduled CRON jobs and developed APIs. </p>
                </div>
                    <div className="card--work-history"
                
                    >
                        <strong
                
                        >🚧 Web Developer, BeCreative Imaginations Ltd.</strong>
                        <p
                
                        >01/2020 - 04/2020</p>
                        <p
                
                        >Worked on providing an online presence for the firm through the use of web development and deployment technologies - hence, providing an online availability </p>
                    </div>


                    <div className="card--work-history"
                
                    >
                        <strong
                        >🚧 Web and IT Support Engineer</strong>
                        <p
                
                        >07/2021 - 01/2022</p>
                        <p
                
                        >Utilized and improved on existing internal web technologies.</p>
                        <ul
                
                        >
                            <li
                
                            >Added Security patches and mechanisms to protect confidential files</li>
                            <li
                
                            >Developed an online repository/web app for managing internal organization files</li>
                            <li
                
                            >Utilized and tested existing web technologies</li>
                            <li
                
                            >Configuration, management and integration of new and existing web technologies</li>
                            <li
                
                            >Provided makeshift training for fresh interns in the use of web technologies</li>
                        </ul>
                    </div>

                </section>

                <section className="section--page"
                >
                    <h2 className="h2-special"
                    >Projects & Portfolio</h2>
                    <div className="card--project"
                    >
                        <A href="https://github.com/jibolashittubolu" target="_blank" rel='noreferrer'
                        >
                            <span
                        >Developed a booking and reservation app  plus Payment integration analogous to Booking.com 🏆 </span></A>
                    </div>

                    <div className="card--project"
                
                    >
                        <A href="https://github.com/jibolashittubolu" target="_blank"  
                
                        ><span
                
                        > Developed a fully functional and responsive Pizza ordering web app with payment integration 🏆 </span> </A>
                    </div>

                    <div className="card--project"
                
                    >
                        <A href="https://github.com/jibolashittubolu" target="_blank" 
                
                        ><span
                
                        >Developed a fullstack social network application where content creators, users can document and share their stories 🏆 </span></A>
                    </div>


                    <div className="card--project"
                
                    >
                        <A href="https://github.com/jibolashittubolu" target="_blank" 
                
                        ><span
                
                        >Developed a fun trivia app where users are advertently limited to learning not more than one fact per day to aid memory juggling 🏆 </span></A>
                    </div>

                    <div className="card--project"
                    style={themePickers()}
                    >
                        <A href="https://github.com/jibolashittubolu" target="_blank" 
                
                        ><span
                
                        >Developed an admin app for adding, recording and managing inventory 🏆 </span></A>
                    </div>

                </section>
                
                <section
                className="section--page"
                >
                    <h2>Education</h2>
                    <p>Obafemi Awolowo University</p>
                    <h5>Computer Science with Economics (BSc)  [2017 - in view]</h5>

                </section>
        
            </div>
        </div>

  )
}

const Portfolio = () => {
    return (
        <ThemeContextProvider>
            <AppInt />
        </ThemeContextProvider>
    )
}


export default Portfolio