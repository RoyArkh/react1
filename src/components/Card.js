import './Card.css';
import levipic from '../media/pfp.webp';
import Person from './Person.js';
import MainButtons from './MainButtons.js';
import About from './About.js';
import Interests from './Interests.js';
import Footer from './Footer.js';

function Card() {
  return (
    <div className="card">
        <img src={levipic} alt="levi" />
        <Person />
        <MainButtons />
        <About />
        <Interests />
        <Footer />
    </div>
  );
}

export default Card;
