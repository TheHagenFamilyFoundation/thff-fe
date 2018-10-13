
console.log("url = " + localStorage.getItem('backend_url'));

const environment = {
  production: true,
  envName: 'prod',
  API_URL: 'https://thff-be-production.herokuapp.com/'
};


export { environment };