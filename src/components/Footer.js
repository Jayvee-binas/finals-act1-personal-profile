function Footer() {
    return (
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Jayvee R. Biñas. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/yourusername">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;