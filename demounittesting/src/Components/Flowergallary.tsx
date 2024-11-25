import Flowercard from './Flowercard';
import './Flowergallary.css';

// Define the structure of each flower using TypeScript interfaces
interface Flower {
  image: string;
  title: string;
  description: string;
}

// Define flowers array directly without useMemo
const flowers: Flower[] = [
  {
    image: "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_960_720.jpg",
    title: "Cushion ",
    description: "A variety of the common chrysanthemum."
  },
  {
    image: "https://i.pinimg.com/736x/21/e9/35/21e9350465624bf960b355a5b5f94fcf.jpg",
    title: "Sunflower",
    description: "Sunflowers are large, bright yellow flowers with a central brownish disk."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1676070096487-32dd955e09e0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Tulip",
    description: "Tulips are spring-blooming flowers with smooth, oval petals."
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cushion ",
    description: "A variety of the common chrysanthemum."
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s",
    title: "Sunflower",
    description: "Sunflowers are large, bright yellow flowers with a central brownish disk."
  },
  {
    image: "https://img.freepik.com/free-photo/colorful-flower-is-vase-with-yellow-center_1340-29676.jpg",
    title: "Tulip",
    description: "Tulips are spring-blooming flowers with smooth, oval petals."
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/038/112/743/small/ai-generated-vibrant-single-flower-up-close-against-a-backdrop-of-vivid-colors-nature-s-palette-ai-generated-photo.jpg",
    title: "Cushion ",
    description: "A variety of the common chrysanthemum"
  },
  {
    image: "https://i.pinimg.com/736x/21/e9/35/21e9350465624bf960b355a5b5f94fcf.jpg",
    title: "Sunflower",
    description: "Sunflowers are large, bright yellow flowers with a central brownish disk."
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/05/13/14/35/white-flower-7990645_960_720.jpg",
    title: "Tulip",
    description: "Tulips are spring-blooming flowers with smooth, oval petals."
  },
];

const Flowergallary = () => (
  <div className="flower-gallery">
    <header>
      <h1 className="header-title">Flower Gallery</h1>
    </header>
    <section className="gallery">
      {flowers.map((flower, index) => (
        <div key={index} data-testid="flower-card">
          <Flowercard {...flower} />
        </div>
      ))}
    </section>
  </div>
);

export default Flowergallary;
