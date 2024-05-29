
import '../styles/Services.css'; // Import the CSS file

const Services = () => {
    return (
        <div className="services-container">
            <h2 className="services-title">Our Services</h2>
            <div className="services-grid">
                <div className="service-card">
                    <h3 className="service-card-title">General Consultation</h3>
                    <p className="service-card-description">
                        Comprehensive health evaluations and personalized medical advice.
                    </p>
                </div>
                <div className="service-card">
                    <h3 className="service-card-title">Specialized Treatment</h3>
                    <p className="service-card-description">
                        Expert care in cardiology, dermatology, pediatrics, and more.
                    </p>
                </div>
                <div className="service-card">
                    <h3 className="service-card-title">Emergency Services</h3>
                    <p className="service-card-description">
                        24/7 emergency care for critical health situations.
                    </p>
                </div>
                <div className="service-card">
                    <h3 className="service-card-title">Diagnostic Services</h3>
                    <p className="service-card-description">
                        Advanced diagnostic imaging and laboratory services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
