import { Link, Routes, Route } from 'react-router-dom';
function Card({ data }) {
  return (
    <Link to={`country/${data.cca3}`}>
      <div className='card'>{data.name.common}</div>
    </Link>
  );
}

export default Card;
