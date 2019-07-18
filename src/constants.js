/*const dotenv = require('dotenv');
const axios = require('axios');


function setupEnvironment() {
    let path = `${__dirname}/../.env`;

    if(process.env.NODE_ENV === 'development')
      path = `${__dirname}/../.env.development`;

      dotenv.config({path: path});
  }

  
setupEnvironment();

module.exports = {
    PORT : process.env.PORT,
    webexAxiosInstance : axios.create({
        baseURL: 'https://api.ciscospark.com/v1',
        timeout: 1000,
        headers: {'authorization':  process.env.BOT_TOKEN}
    }),
      jokeAxiosInstance : axios.create({
        baseURL: 'https://icanhazdadjoke.com',
        timeout: 1000,
        headers: {'Accept': 'text/plain'}
    }),
    botName: 'Dad'
};*/
const dotenv = require('dotenv');
const axios = require('axios');

const MY_TOKEN = 'NjVkNDU0ZWEtNjQ1NC00ZGNiLThkNzYtZGQwZWM1YjA3MDk3ZTZiOGI4NzktMjcw_PF84_consumer'
const BOT_TOKEN = 'ODU1ZWFjNzgtY2Q0ZS00MTk3LTlhM2ItMDMyMDMwZmYyYjgxMzRmYTUzNWEtNzA2_PF84_consumer'
const BOT = true;

module.exports ={
    PORT : 3000,
    webexAxiosInstance : axios.create({
      baseURL: 'https://api.ciscospark.com/v1',
      timeout: 1000,
      headers: {'authorization':  `Bearer ${BOT ? BOT_TOKEN : MY_TOKEN}`}    
})
};