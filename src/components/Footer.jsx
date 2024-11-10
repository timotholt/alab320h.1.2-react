import Navigation from './Navigation';

const Footer = () => {
  const navItems = [
    { href: '#home', text: 'Home' },
    { href: '#womens', text: "Women's" },
    { href: '#mens', text: "Men's" },
    { href: '#onthestreet', text: 'On The Street' },
    { href: '#thecatwalk', text: 'The Catwalk' },
    { href: '#adwatch', text: 'Ad Watch' },
    { href: '#about', text: 'About' },
    { href: '#tips', text: 'Tips' }
  ];

  return (
    <footer className="footer">
      <Navigation 
        items={navItems}
        className="footer-nav"
        ariaLabel="Footer Navigation"
      />
      <p>&copy; 2013 Valet Industries, Inc</p>
    </footer>
  );
};

export default Footer;