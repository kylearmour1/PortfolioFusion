import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faServer, faDesktop, faMobileAlt, faGlobe, faCodeBranch, faToolbox, faCogs, faUsers, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import resume from '../../assets/Armour Resume.pdf';  
import './Resume.css';

library.add(fab, faCode, faDatabase, faServer, faDesktop, faMobileAlt, faGlobe, faCodeBranch, faToolbox, faCogs, faUsers, faFileDownload);

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <p>
        <a className='link' href={resume} download>
          <FontAwesomeIcon icon={faFileDownload} /> Download my Resume
        </a>
      </p>

      <div className="resume-grid">
        <div className="resume-section">
   
          <h3>Front-end Skills:</h3>
          <ul>
            <li><FontAwesomeIcon icon={faDesktop} /> Front-end frameworks</li>
            <li><FontAwesomeIcon icon={faCode} /> Scalable code development</li>
            <li><FontAwesomeIcon icon={faGlobe} /> RESTful APIs</li>
            <li><FontAwesomeIcon icon={faCode} /> Object-Oriented Programming</li>
            <li><FontAwesomeIcon icon={faGlobe} /> Third-party APIs</li>
            <li><FontAwesomeIcon icon={faDesktop} /> Web application architecture</li>
            <li><FontAwesomeIcon icon={faToolbox} /> Debugging and troubleshooting</li>
            <li><FontAwesomeIcon icon={faUsers} /> Collaboration</li>
          </ul>
        </div>

        <div className="resume-section">
         
          <h3>Front-end Technologies:</h3>
          <ul>
            <li><FontAwesomeIcon icon={['fab', 'html5']} /> HTML</li>
            <li><FontAwesomeIcon icon={['fab', 'css3-alt']} /> CSS</li>
            <li><FontAwesomeIcon icon={['fab', 'js-square']} /> JavaScript</li>
            <li><FontAwesomeIcon icon={['fab', 'react']} /> React</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> Redux</li>
            <li><FontAwesomeIcon icon={['fab', 'bootstrap']} /> Bootstrap</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> jQuery</li>
            <li><FontAwesomeIcon icon={faMobileAlt} /> Progressive Web Applications (PWAs)</li>
            <li><FontAwesomeIcon icon={faDesktop} /> Responsive Design</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> Webpack</li>
            <li><FontAwesomeIcon icon={faDesktop} /> Day.js</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Back-end Skills:</h3>
          <ul>
            <li><FontAwesomeIcon icon={faServer} /> Full-stack development</li>
            <li><FontAwesomeIcon icon={faDatabase} /> Database management</li>
            <li><FontAwesomeIcon icon={faServer} /> Server-side technologies</li>
            <li><FontAwesomeIcon icon={faCogs} /> Agile Development</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Back-end Technologies:</h3>
          <ul>
            <li><FontAwesomeIcon icon={['fab', 'node']} /> Node.js</li>
            <li><FontAwesomeIcon icon={faServer} /> Express.js</li>
            <li><FontAwesomeIcon icon={faDatabase} /> MySQL</li>
            <li><FontAwesomeIcon icon={faDatabase} /> MongoDB</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> Sequelize</li>
            <li><FontAwesomeIcon icon={faGlobe} /> RESTful APIs</li>
            <li><FontAwesomeIcon icon={faCodeBranch} /> GraphQL</li>
            <li><FontAwesomeIcon icon={faGlobe} /> JSON Web Tokens (JWT)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;

