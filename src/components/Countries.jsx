import Card from './Card';

function Countries({data}) {
  console.log(data);
  return (
    <div className='container'>
      <h3>Total {data.length} Countries Listed</h3>
      {data.map((counrty, index) => (
        <Card key={index} data={counrty} />
      ))}
    </div>
  );
}

export default Countries;
