import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
function App() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/find');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Icon icon="cil:medical-cross" />Medicare </h1>
        <nav>
          <a href="/home">Home</a>
          <a href="/Find">Find a Doctor</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
          <a href="/">Login</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>We help patients live a healthy, longer life.</h2>
          <p>Introducing MedFind, your trusted partner in finding the perfect healthcare provider for your needs. With MedFinder, the daunting task of searching for a doctor becomes effortless and efficient. Whether you're seeking a specialist, primary care physician, or any other healthcare professional, MedFinder streamlines the process, connecting you with top-rated practitioners in your area</p>
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
        </section>s
      </main>
    </div >
  );
}

export default App;
