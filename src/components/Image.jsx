const Image = ({ src, alt }) => {
  return (
    <img 
      src={`/${src}`} 
      alt={alt}
      className="article-image"
    />
  );
};

export default Image;