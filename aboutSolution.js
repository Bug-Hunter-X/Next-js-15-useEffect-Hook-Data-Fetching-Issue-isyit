```javascript
// pages/aboutSolution.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately, e.g., display an error message
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>About Us</h1>
      <p>Some information about us.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```