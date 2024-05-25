import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function DoctorDetails() {
    const [doctor, setDoctor] = useState(null);
    const { id } = useParams(); // Get doctor ID from the URL parameter
    const navigate = useNavigate();

    useEffect(() => {
        fetchDoctorDetails();
    }, []);

    const fetchDoctorDetails = async () => {
        const { data } = await axios.get(`http://localhost:8080/api/v1/users/${id}`);
        console.log(data.data)
        setDoctor(data.data);
    };

    const handleBack = () => {
        navigate('/find'); // Navigate back to doctors list
    };

    return (

        <div className="doctor-details">
            {doctor ? (
                <>



                    <img src={doctor.photo} alt={doctor.name} />
                    <h2>{doctor.name}</h2>
                    <p>{doctor.speciality}</p>

                    <Link to={'https://calendly.com/hotpizza57/30min'}> agendar turno </Link>

                    <Link to={'https://calendar.app.google/VY7A5guAi1bvjNe29'}> agendar turno para consulta web </Link>

                    {/* Display more doctor details here */}
                    <button onClick={handleBack}>Back to Doctors List</button>
                </>
            ) : (
                <p>Loading doctor details...</p>
            )}
        </div>
    );
}

export default DoctorDetails;
