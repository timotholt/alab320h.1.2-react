import Image from './Image';

const Article = ({ date, title, image, content }) => {
  return (
    <article className="article">
      <h4 className="date">{date}</h4>
      <h3>{title}</h3>
      <Image src={image} alt={title} />
      <p>
        {content}
        <a href="#continue" className="continues">Continues...</a>
      </p>
    </article>
  );
};

export default Article;