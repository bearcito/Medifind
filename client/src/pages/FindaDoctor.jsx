import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import doctorPhot1 from '../assets/doctor1.webp';
import doctorPhot2 from '../assets/doctor2.webp';
import doctora1 from '../assets/doctora1.jpg';
import axios from 'axios';

 

// Replace these with your actual doctor photos (image URLs)
const doctorPhotos = [
    // 1: '' // Replace with photo URL for Dr. John Smith
    // 2: 'https://via.placeholder.com/150', // Replace with photo URL for Dr. Jane Doe
    // 3: 'https://via.placeholder.com/150', // Replace with photo URL for Dr. Michael Lee
    // // Add more photo URLs here
];

// Replace this with your actual doctor data (name, speciality)
const mockDoctors = [
    {
        id: 1, name: 'Dr. John Smith', speciality: 'Cardiology', photo: doctorPhot1,
    },
    {
        id: 2, name: 'Dr. Jane Doe', speciality: 'Dermatology', photo: doctorPhot2
    },
    {
        id: 3, name: 'Dr. Michael Lee', speciality: 'Pediatrics', photo: doctora1
    },
    // Agrega más doctores aquí
];

function FindaDoctor() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([])
    const [data, setData] = useState([])

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
        const filtered = doctors.filter((doctor) =>
            doctor.name.toLowerCase().includes(searchQuery) ||
            doctor.speciality.toLowerCase().includes(searchQuery)
        );
        setDoctors(filtered);
        console.log(e);
        if (e.target.value < 1) { setDoctors(data) }
    };

    const handleDoctorClick = (doctorId) => {
        navigate(`/doctor/${doctorId}`);
    };

    const getAllDoctors = async () => {
        const { data } = await axios.get('http://localhost:8080/api/v1/users');
        setDoctors(data.data);
        setData(data.data);



    }
    useEffect(() => {
        getAllDoctors();


    }, [])

    return (
        <div className="find-doctor">
            <h2>Find a Doctor</h2>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by name or speciality"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="doctors-grid">
                {doctors && doctors.slice(0, 9).map((doctor) => (
                    <div
                        key={doctor.id}
                        className="doctor-card"
                        onClick={() => handleDoctorClick(doctor._id)}
                    >
                        <img src={doctor.photo} alt={doctor.name} className='fotodoctores' />
                        <h3>{doctor.name}</h3>
                        <p>{doctor.speciality}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FindaDoctor;
