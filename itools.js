const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("url", "https%3A%2F%2Fwww.instagram.com%2Fp%2FCRByucAnXWo");

const options = {
  method: 'POST',
  url: 'https://instagram-video-or-images-downloader.p.rapidapi.com/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '00b7df1705msh0154ea477d236a9p15f549jsn46206cab346c',
    'X-RapidAPI-Host': 'instagram-video-or-images-downloader.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
