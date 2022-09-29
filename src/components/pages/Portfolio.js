import React from 'react';
import '../../styles/portfolio.css';
import image from '../../styles/images/InvoiceManager.jpg';
import recipe from '../../styles/images/RecipeApp.jpg';
import weather from '../../styles/images/weather-forecast.jpg';
import blog from '../../styles/images/blog.jpg';
import social from '../../styles/images/Technology_Blogs.jpg';
import nlp from '../../styles/images/nlp.jpg';


import { FaExternalLinkAlt,FaGithub} from 'react-icons/fa';

export default function Portfolio() {
  const styles = {
 link: {
    // background: '#295367',
    color:'#295367',
  }
}
  return (
    <>
    <div className='first'>
    <section className='card' >
      <img className='card-img-top' src={image}/>
       <h3><b>Invoice Manager</b><a  style={styles.link} href="https://github.com/shubhra8/Invoice-Manager1"><FaGithub /></a></h3>
       {/* <div class="card-body"> */}
       <p className="card-text">This app lets small buisness to create and maintain invoice for there clients and it also email invoices in pdf format to there clients.<a style={styles.link} href="https://invoice-manager-pro.herokuapp.com/"><FaExternalLinkAlt ></FaExternalLinkAlt> </a></p>
        {/* </div> */}
</section>
        <section className="card" >
            <img className="card-img-top"  src={recipe} />
            <h3><b>Meal/Calorie App</b> <a style={styles.link} href="https://github.com/shubhra8/Meal-Finder"><FaGithub /></a></h3>
            <div className="card-body">
                <p className="card-text">This app will help users find a recipe to cook based on meal type,calorie count and allergy prefrences.<a style={styles.link} href="https://shubhra8.github.io/Meal-Finder/"><FaExternalLinkAlt /></a></p>
            </div>
      
      </section>
      <section className='card' >
      <img className='card-img-top' src={weather}/>
       <h3><b>Weather Forecast</b><a style={styles.link} href="https://github.com/shubhra8/Weather-Dashboard"><FaGithub /></a></h3>
       {/* <div class="card-body"> */}
       <p className="card-text">Weather dashboard allow user to search for city of there choice for checking current weather condition.It also provide
                user next 5 days forecasted weather condition data.It provide the temperature, the humidity, the wind speed, and the UV<a style={styles.link}  href="https://shubhra8.github.io/Weather-Dashboard/"><FaExternalLinkAlt /></a></p>
        {/* </div> */}
</section>
      </div>
      <div className='second'>
    
        <section className="card" >
            <img className="card-img-top"  src={blog} />
            <h3><b>Personal Website</b><a style={styles.link} href="https://github.com/shubhra8/Module2-Challenge"><FaGithub /></a></h3>
            <div className="card-body">
                <p className="card-text">This is a personal portfolio website designed using HTML/CSS. <a style={styles.link} href="https://shubhra8.github.io/Module2-Challenge/"><FaExternalLinkAlt /></a></p>
            </div>
      </section>
      <section className="card" >
            <img className="card-img-top"  src={social} />
            <h3><b>Technology_Blogs</b><a style={styles.link} href="https://github.com/shubhra8/Tech-Bloggers"><FaGithub /></a></h3>
            
            <div className="card-body">
                <p className="card-text">This app is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.<a style={styles.link} href="https://tech-bloggers8.herokuapp.com/
"><FaExternalLinkAlt /></a></p>
            </div>
      </section>
      <section className="card" >
            <img className="card-img-top"  src={nlp} />
            <h3><b>Natural Langauge Processing</b><a style={styles.link} href="#"><FaGithub /></a></h3>
            <div className="card-body">
                <p className="card-text">Its a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is
                    the ability of an application to understand the human language, written or oral.<a style={styles.link} href="#"><FaExternalLinkAlt /></a></p>
            </div>
      </section>
      </div>
      </>
  );
}
