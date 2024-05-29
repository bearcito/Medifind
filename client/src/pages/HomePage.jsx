import '../styles/HomePage.css';
import { useNavigate } from 'react-router-dom';
import hospitalImage from '../assets/hospital.webp'; // Import the image

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/find');
  }

  return (
    <div className="App">
      <main>
        <section className="hero">
          <img src={hospitalImage} alt="Hospital" className="hero-image" /> {/* Add the image */}
          <h2>We help patients live a healthy, longer life.</h2>
          <p>Introducing MedFind, your trusted partner in finding the perfect healthcare provider for your needs. With MedFinder, the daunting task of searching for a doctor becomes effortless and efficient. Whether you&apos;re seeking a specialist, primary care physician, or any other healthcare professional, MedFinder streamlines the process, connecting you with top-rated practitioners in your area</p>
          <button onClick={handleButtonClick}>Request an Appointment</button>
        </section>
        <section className="stats">
          <div className="stat">
            <h3>10+</h3>
            <p>Years of Experience in the medical field</p>
          </div>
          <div className="stat">
            <h3>5 stars</h3>
            <p>rated by our users</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Patient Satisfaction.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
