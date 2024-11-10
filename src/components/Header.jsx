import Navigation from './Navigation';

const Header = () => {
  const navItems = [
    { href: '#womens', text: "Women's" },
    { href: '#mens', text: "Men's" },
    { href: '#onthestreet', text: 'On the Street' },
    { href: '#thecatwalk', text: 'The Catwalk' },
    { href: '#adwatch', text: 'Ad Watch' },
    { href: '#about', text: 'About' }
  ];

  return (
    <header className="header">
      <h1>Satre's List</h1>
      <h2>Better-Dressed People</h2>
      <Navigation 
        items={navItems}
        className="header-nav"
        ariaLabel="Main Navigation"
      />
    </header>
  );
};

export default Header;