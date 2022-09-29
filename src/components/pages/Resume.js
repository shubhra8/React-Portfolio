import React from 'react';
import '../../styles/resume.css';


export default function Resume() {
//   const saveFile = () => {
  
//      var file = "file:///C:/Users/shubh/OneDrive/Desktop/Resume_Shubhra Salunke_v2.doc";
//       // let fileName = 'resume';
// FileSaver(file, "image.jpg");
  
//   };
const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Shubhra Salunke Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Shubhra Salunke Resume.pdf';
                alink.click();
            })
          })
        }
  
  return (
    <div className='resume'>
      
      <h3>Resume-Click below button to download resume</h3>
                <button className="button" onClick={onButtonClick}>
                    Download CV
                </button>
      <section id="skills">
        {/* <h2>
        <b>Skill Set</b>
        </h2> */}
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div id="list">
        <ol id="order1">
           <h4>
            <b>Front End Technologies</b>
            </h4>
            <li>  HTML</li>
            <li> CSS</li>
            <li> Javascript</li>   
        </ol>
        <ol id="order2">
           <h4>
            <b>Back End Technologies</b>
            </h4>
              <li> Node</li>
            <li> Express</li>
            <li> SQL</li>
            <li> Api</li>
            <li> MySQL,sequelize</li>
            <li> MongoDB</li>
        </ol>
        </div>
       </section>
    </div>
  );
}
