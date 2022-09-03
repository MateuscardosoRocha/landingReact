import './App.css';
import travel_01 from './assets/travel-01.jpg';
import travel_02 from './assets/travel-02.jpg';
import travel_03 from './assets/travel-03.jpg';
import Hero from './components/Hero'
import Slider from './components/Slider';

import NavBar from './components/NavBar';

const navBarLinks = [
{url: "#", title: "Home"},
{url: "#", title: "Trips"},
{url: "#", title: "Rewards"}
]

function App() {
  return (
    <div className="App">
      <NavBar navBarLinks={navBarLinks}/>
      <Hero imageSrc={travel_01}/>
      <Slider imageSrc={travel_02} 
        title={"God is Good!"} 
        subtitle={"non timebo mala quoniam tu mecum es"}
        
        />   
        <Slider imageSrc={travel_03} 
        title={"Semper paratus!"} 
        subtitle={"Hoc non pereo habebo fortior me!"}
        flipped={true}
        
  
        />   
      
    </div>
  );
}

export default App;
