import React from 'react';
import '../styles/navtabs.css';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const styles = {
  navlink: {
 background: '#295367',
  fontSize: '1.2rem',
   color: 'white',
  
   
  },
  navtabs:{
    color:"#295367",
    border: "2px solid white",
    
  },
}
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.navtabs}>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} style={styles.navlink}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} style={styles.navlink}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} style={styles.navlink}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={styles.navlink}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
