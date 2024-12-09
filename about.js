```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
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
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate an API call with a delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (req.method === 'GET') {
    res.status(200).json({ message: 'Data from API' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
```