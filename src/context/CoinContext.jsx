const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-8iN9ekjjVJM54mSpG81rZiSw'}
  };
  
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));