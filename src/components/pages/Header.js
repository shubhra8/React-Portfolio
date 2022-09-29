import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Header1 from '../PortfolioContainer';
import back from '../../styles/images/back.jpg';
import '../../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGithub,FaLinkedinIn,FaFacebook} from 'react-icons/fa';

export default function Header() {
    
  const [currentPage, setCurrentPage] = useState('Portfolio');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const styles = {
  headerStyle: {
    // background: '#295367',
    color:'#fff',
    fontfamily:"Abril Fatface, cursive",
    
  }
 
};
   return (
    <div id="maindiv">    
     <header style={styles.headerStyle} className="header">
     
    

      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      </header>
      {renderPage()}
      <footer id="footer">
            <div id="Contact Me" className="container-fluid">
              <a href='https://github.com/shubhra8'><FaGithub className='git' /></a>
              <a href='https://www.linkedin.com/in/shubhra-salunke-13580734/'><FaLinkedinIn className='git'/></a>
              <a href='https://www.facebook.com/shubhra.salunke'><FaFacebook className='git'/></a>   
                 </div>
        </footer>
    </div>
  );
}
