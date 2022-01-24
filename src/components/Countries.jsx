import Card from './Card';
import { useParams } from 'react';

function Countries({ data }) {
  return (
    <div className='container'>
      {data.map((counrty, index) => (
        <Card key={index} data={counrty} />
      ))}
    </div>
  );
}

export default Countries;
