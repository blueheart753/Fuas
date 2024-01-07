'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/route');
        const result = await response.json();
        setData(result.data);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <main className={styles.main}></main>;
}
