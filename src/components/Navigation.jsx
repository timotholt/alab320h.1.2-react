const Navigation = ({ items, className, ariaLabel }) => {
  return (
    <nav aria-label={ariaLabel} role="navigation">
      <ul className={className}>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;