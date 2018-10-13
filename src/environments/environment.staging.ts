console.log("url = " + localStorage.getItem('backend_url'));

const environment = {
  production: true,
  envName: 'staging',
  API_URL: 'https://hagenfoundationbackend.herokuapp.com'
};


export { environment };