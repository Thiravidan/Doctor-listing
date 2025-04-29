import { useEffect, useState } from 'react';
import API from '../services/api';
import DoctorCard from '../components/DoctorCard';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [doctors, setDoctors] = useState([]);
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    fetchDoctors();
  }, [specialization, experience, page]);

  const fetchDoctors = async () => {
    try {
      const res = await API.get('/list-doctor-with-filter', {
        params: { specialization, experience, page, limit },
      });
      setDoctors(res.data.doctors);
    } catch (err) {
      console.error('Error fetching doctors', err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Doctors | Apollo Clone</title>
        <meta name="description" content="Find experienced doctors and specialists." />
        <meta name="keywords" content="doctors, specialists, apollo, medical" />
      </Head>

      <h1 className={styles.title}>Find Your Specialist</h1>

      {/* Filter UI */}
      <div className={styles.filters}>
        <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} className={styles.select}>
          <option value="">All Specializations</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Neurologist">Neurologist</option>
        </select>

        <select value={experience} onChange={(e) => setExperience(e.target.value)} className={styles.select}>
          <option value="">All Experiences</option>
          <option value="1">1+ years</option>
          <option value="3">3+ years</option>
          <option value="5">5+ years</option>
        </select>
      </div>

      {/* Doctor Cards */}
      <div className={styles.cards}>
        {doctors.length === 0 ? (
          <p className={styles.noResults}>No doctors found.</p>
        ) : (
          doctors.map((doc) => (
            <div key={doc._id} className={styles.card}>
              <DoctorCard doctor={doc} />
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} className={styles.pageBtn}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)} className={styles.pageBtn}>
          Next
        </button>
      </div>
    </div>
  );
}
