import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Country({ data }) {
  let { code } = useParams();

  const newCountry = data.filter((item) => item.cca3 === code);
  console.log(newCountry);

  return (
    <div className='container'>
      <div className='card'> {newCountry[0].name.common} </div>
      <img src={newCountry[0].flags.png} alt={newCountry[0].cca3} />
      <p>Region: {newCountry[0].region}</p>
      <p>Capital: {newCountry[0].capital}</p>
      <p>Population: {newCountry[0].population}</p>
      <Link to='/' style={{ color: 'red' }}>
        back
      </Link>
    </div>
  );
}

export default Country;
