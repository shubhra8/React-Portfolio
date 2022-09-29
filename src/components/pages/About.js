import React from 'react';
import '../../styles/about.css';
import image from '../../styles/images/me.jpg';

const styles = {
  imageStyle: {
    height:'300px',
    width: '300px',
  },
};
export default function About() {
 
  return (
    <>
      {/* <div>

      <h1>About Page</h1>
      
        <img src={image} style={styles.imageStyle}/>
    <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspeisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div> */}
<section id="AboutMe">
      <section>

        <img src={image} style={styles.imageStyle}/>
      </section>
    <section className="Me">

        {/* <!--<h1 style="font-size: large;color: blue;">Hello</h1>--> */}
        <p>
          <h4>Hi, my name is </h4>
          <h2 id="headname"> Shubhra Salunke.</h2><h4>I am a Web Developer From Austin.</h4>
          <br />
          I am bachelor in Computer
          Science.I have 5 years of experience working in lT industry.I am a certified Udacity frontend nano degree professional. Currently pursuing full stack web development bootcamp from
          Georgia tech.<br />

        </p>

      </section>
      </section>
    </>
  );
}
