import Card from './Card';

function Countries({data}) {
  // just sort for Alphabet
  data.sort((a, b) => {
    let fa = a.name.common.toLowerCase(),
      fb = b.name.common.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  //
  return (
    <div className='container'>
      <h3>Total {data.length} Countries Listed</h3>
      {data.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
}

export default Countries;
