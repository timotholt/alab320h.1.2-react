import Header from './components/Header';
import Article from './components/Article';
import Footer from './components/Footer';

const App = () => {
  const articles = [
    {
      date: '11/12/20',
      title: 'On the Street in Brooklyn',
    //   image: './src/public/blog-image-1.jpg',
    image: './blog-image-1.jpg',
      content: 'Cray ipsum dolor sit, amet consectetur adipisicing elit. Beatae laboriosam laborum quae quia alias, sequi iure. Quis consequuntur quidem repudiandae ratione vitae dignissimos a incidunt, mollitia nobis similique voluptate eaque, esse at molestias assumenda optio ipsam. Pariatur eaque asperiores nemo et corporis corrupti architecto nulla ex omnis, temporibus debitis libero quibusdam ut itaque reprehenderit? Ipsum consectetur aliquid odit incidunt. Porro ea eos accusamus perferendis, voluptates fugiat, velit minus iste in nisi, voluptatem ratione dolor! Explicabo dolor tempore atque tempora. Quasi voluptatibus est, ad veritatis debitis maiores earum eos deserunt laborum corporis fuga quos ullam. Voluptatum quam alias magni vero fuga!'
    },
    {
      date: '11/11/20',
      title: 'Vintage in Vogue',
      image: './public/blog-image-2.jpg',
      content: 'Selfies sunt, dolor sit amet cray ipsum dolor sit, amet consectetur adipisicing elit. Beatae laboriosam laborum quae quia alias, sequi iure. Quis consequuntur quidem repudiandae ratione vitae dignissimos a incidunt, mollitia nobis similique voluptate eaque, esse at molestias assumenda optio ipsam. Pariatur eaque asperiores nemo et corporis corrupti architecto nulla ex omnis, temporibus debitis libero quibusdam ut itaque reprehenderit? Ipsum consectetur aliquid odit incidunt. Porro ea eos accusamus perferendis, voluptates fugiat, velit minus iste in nisi, voluptatem ratione dolor! Explicabo dolor tempore atque tempora. Quasi voluptatibus est, ad veritatis debitis maiores earum eos deserunt laborum corporis fuga quos ullam. Voluptatum quam alias magni vero fuga!'
    }
  ];

  return (
    <>
      <Header />
      <main className="main">
        {articles.map((article, index) => (
          <Article
            key={index}
            date={article.date}
            title={article.title}
            image={article.image}
            content={article.content}
          />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;