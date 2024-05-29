import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/FindaDoctor.css';

function FindaDoctor() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [data, setData] = useState([]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        const filtered = doctors.filter((doctor) =>
            doctor.name.toLowerCase().includes(searchQuery) ||
            doctor.speciality.toLowerCase().includes(searchQuery)
        );
        setDoctors(filtered);
        if (e.target.value < 1) {
            setDoctors(data);
        }
    };

    const handleDoctorClick = (doctorId) => {
        navigate(`/doctor/${doctorId}`);
    };

    const getAllDoctors = async () => {
        const { data } = await axios.get('http://localhost:8080/api/v1/users');
        setDoctors(data.data);
        setData(data.data);
    };

    useEffect(() => {
        getAllDoctors();
    }, []);

    return (
        <div className="find-doctor-container">
            <h2 className="find-doctor-title">Find a Doctor</h2>
            <div className="search-bar-container">
                <input
                    type="text"
                    className="search-bar-input"
                    placeholder="Search by name or speciality"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="doctors-grid-container">
                {doctors.slice(0, 9).map((doctor) => (
                    <div
                        key={doctor.id}
                        className="doctor-card-container"
                        onClick={() => handleDoctorClick(doctor._id)}
                    >
                        <div className="doctor-card-image-container">
                            <img src={doctor.photo} alt={doctor.name} className="doctor-card-image" />
                        </div>
                        <div className="doctor-card-content">
                            <h3 className="doctor-card-name">{doctor.name}</h3>
                            <p className="doctor-card-speciality">{doctor.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FindaDoctor;
