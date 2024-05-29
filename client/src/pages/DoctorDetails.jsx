import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/DoctorDetails.css'; // Import the CSS file

function DoctorDetails() {
    const [doctor, setDoctor] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchDoctorDetails();
    }, []);

    const fetchDoctorDetails = async () => {
        const { data } = await axios.get(`http://localhost:8080/api/v1/users/${id}`);
        setDoctor(data.data);
    };

    const handleBack = () => {
        navigate('/find');
    };

    return (
        <div className="doctor-details-container">
            <div className="doctor-details-left">
                {doctor ? (
                    <img src={doctor.photo} alt={doctor.name} />
                ) : (
                    <p>Loading doctor details...</p>
                )}
            </div>
            <div className="doctor-details-right">
                {doctor ? (
                    <div className="doctor-details-content">
                        <h2>{doctor.name}</h2>
                        <p>{doctor.speciality}</p>
                        <p>{doctor.bio || `Dr. ${doctor.name} is a highly skilled specialist with years of experience in ${doctor.speciality}. They are committed to providing exceptional care and ensuring the well-being of their patients.`}</p>
                        <Link to="https://calendly.com/hotpizza57/30min">Schedule an Appointment</Link>
                        <Link to="https://calendar.app.google/VY7A5guAi1bvjNe29">Schedule an Online Consultation</Link>
                        <br />
                        <button onClick={handleBack}>Back to Doctors List</button>
                    </div>
                ) : (
                    <p>Loading doctor details...</p>
                )}
            </div>
        </div>
    );
}

export default DoctorDetails;
