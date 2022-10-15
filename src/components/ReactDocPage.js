import { useParams, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function ReactDocPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.docId}`);
      const result = await res.json();
      setData(result);
      console.log(result);
    }

    fetchData();
  }, [params.docId]);
  return (
    <>
      <h3 onClick={() => navigate('/')}>눌러봐</h3>
      <div>
        ReactDocPage - {params.docId}
      </div>
      <div>
        {data.title}
      </div>
      <div>
        {data.body}
      </div>
    </>
  );
}