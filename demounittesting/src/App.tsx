// import React from 'react';
// import './App.css'; // Import your CSS styles here

// const FlowerCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
//   return (
//     <div className="card">
//       <img src={image} alt={title} />
//       <div className="card-body">
//         <h3 className="card-title">{title}</h3>
//         <p className="card-description">{description}</p>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <main>
//       <header>
//         <h1 className="header-title">Welcome to My App</h1>
//       </header>

//       <section>
//         <FlowerCard
//           image="https://www.ilonasgarden.com/wp-content/uploads//2013/10/5183509318_093454f803_z.jpg"
//           title="Cushion Chrysanthemum"
//           description="A variety of the common chrysanthemum, known for its round, cushion-like shape."
//         />
//         <FlowerCard
//           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnfGVe2KqjpZ4q7Z2IJjmSqj5nsmoLl8T3g&s"
//           title="Sunflower"
//           description="Sunflowers are large, bright yellow flowers with a central brownish disk."
//         />
//         <FlowerCard
//           image="https://m.media-amazon.com/images/I/41f8xrqBosL._AC_UF1000,1000_QL80_.jpg"
//           title="Tulip"
//           description="Tulips are spring-blooming flowers with smooth, oval petals."
//         />
//       </section>
//       <button type="submit" className="primary-button">More Flowers</button>


//       <footer>
//         <p>© 2024 Your Company</p>
//       </footer>
//     </main>
//   );
// };

// export default App;


// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';

// // FlowerCard Component
// const FlowerCard = ({ image, title, description }: { image: string; title: string; description: string }) => (
//   <div className="card">
//     <img src={image} alt={title} />
//     <div className="card-body">
//       <h3 className="card-title">{title}</h3>
//       <p className="card-description">{description}</p>
//     </div>
//   </div>
// );

// // Home Component
// const Home = () => (
//   <main>
//     <header><h1 className="header-title">Welcome to My App</h1></header>
//     <section>
//       {[
//         {
//           image: "https://www.ilonasgarden.com/wp-content/uploads//2013/10/5183509318_093454f803_z.jpg",
//           title: "Cushion Chrysanthemum",
//           description: "A variety of the common chrysanthemum, known for its round, cushion-like shape."
//         },
//         {
//           image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnfGVe2KqjpZ4q7Z2IJjmSqj5nsmoLl8T3g&s",
//           title: "Sunflower",
//           description: "Sunflowers are large, bright yellow flowers with a central brownish disk."
//         },
//         {
//           image: "https://m.media-amazon.com/images/I/41f8xrqBosL._AC_UF1000,1000_QL80_.jpg",
//           title: "Tulip",
//           description: "Tulips are spring-blooming flowers with smooth, oval petals."
//         }
//       ].map((flower, idx) => <FlowerCard key={idx} {...flower} />)}
//     </section>
//     <Link to="/more-flowers"><button className="primary-button">More Flowers</button></Link>
//     <footer><p>© 2024 Your Company</p></footer>
//   </main>
// );

// // FlowerGallery Component
// const FlowerGallery = () => (
//   <main>
//     <header><h1 className="header-title">Flower Gallery</h1></header>
//     <section className="gallery">
//       {[
//         { image: "https://via.placeholder.com/300", title: "Rose", description: "A classic symbol of love and romance." },
//         { image: "https://via.placeholder.com/300", title: "Daisy", description: "Simple and charming white-petaled flowers." },
//         { image: "https://via.placeholder.com/300", title: "Lily", description: "Elegant and fragrant flowers." }
//       ].map((flower, idx) => <FlowerCard key={idx} {...flower} />)}
//     </section>
//     <footer><p>© 2024 Your Company</p></footer>
//   </main>
// );

// // App Component
// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/more-flowers" element={<FlowerGallery />} />
//     </Routes>
//   </Router>
// );

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import Flowergallary from './Components/Flowergallary';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more-flowers" element={<Flowergallary />} />
    </Routes>
  </Router>
);

export default App;
