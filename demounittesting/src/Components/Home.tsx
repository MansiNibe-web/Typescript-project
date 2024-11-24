import { Link } from 'react-router-dom';
import Flowercard from './Flowercard';
const Home = () => {
  const featuredFlowers = [
    {
      image: "https://www.ilonasgarden.com/wp-content/uploads//2013/10/5183509318_093454f803_z.jpg",
      title: "Cushion Chrysanthemum",
      description: "A variety of the common chrysanthemum, known for its round, cushion-like shape."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnfGVe2KqjpZ4q7Z2IJjmSqj5nsmoLl8T3g&s",
      title: "Sunflower",
      description: "Sunflowers are large, bright yellow flowers with a central brownish disk."
    },
    {
      image: "https://m.media-amazon.com/images/I/41f8xrqBosL._AC_UF1000,1000_QL80_.jpg",
      title: "Tulip",
      description: "Tulips are spring-blooming flowers with smooth, oval petals."
    },
    {
        image: "https://i.pinimg.com/736x/21/e9/35/21e9350465624bf960b355a5b5f94fcf.jpg",
        title: "Peony",
        description: "Tulips are spring-blooming flowers with smooth, oval petals."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbu3AAk4VnMDBk2iDixXX8hBOd9nv3nl3_BP8pcv8W0m433J48VBETHQ1Ebd8PUHXhzUo&usqp=CAU",
        title: "Tulip",
        description: "Tulips are spring-blooming flowers with smooth, oval petals."
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oELhQ9_wfoBi9m0VwpXh9ra4KT2DhQ3SCw&s",
        title: "Tulip",
        description: "Tulips are spring-blooming flowers with smooth, oval petals."
    }
    
  ];

  return (
    <main>
      <header>
        <h1 className="header-title">Welcome to My App</h1>
      </header>
      <section>
        {featuredFlowers.map((flower, idx) => (
          <Flowercard key={idx} {...flower} />
        ))}
      </section>
      <Link to="/more-flowers">
        <button className="primary-button">More Flowers</button>
      </Link>
    </main>
  );
};

export default Home;
