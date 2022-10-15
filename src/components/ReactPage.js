import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';

// const response = [
//   {
//     id: 1,
//     title: 'a',
//     date: '11/11/11'
//   },
//   {
//     id: 2,
//     title: 'b',
//     date: '11/11/11'
//   },
//   {
//     id: 3,
//     title: 'c',
//     date: '11/11/11'
//   },
//   {
//     id: 4,
//     title: 'd',
//     date: '11/11/11'
//   },
// ];

export default function ReactPage() {
  const [docs, setDocs] = useState([]);

  async function fetcher() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // setDocs(res.data);
    return res.data;
  }

  const { data, error } = useSWR('posts', fetcher);

  useEffect(() => {

  }, []);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map(doc => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: 'block' }}>
          {doc.title}
        </Link>
      ))
      }

    </div >
  );
}