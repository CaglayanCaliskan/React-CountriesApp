import {Link} from 'react-router-dom';
function Card({country}) {
  return (
    <Link to={`country/${country.cca3}`}>
      <div className='card'>{country.name.common}</div>
    </Link>
  );
}

export default Card;
