const axios = require('axios');
const { response } = require('express');

const baseUrl = "https://dummyjson.com";

exports.getRandomText = async () => {
    let randomId = Math.floor(Math.random()*100);

    let response = await axios.get(`${baseUrl}/posts/${randomId}`);

    return response.data;
}


/*exports.getRandomText = () =>{
    let randomId = Math.floor(Math.random()*100);

    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/posts/${randomId}`)
        .then((result) => {
            resolve(response.data)
        })
        .catch(error => {
            console.log(error);
            reject(false);         
        })
    })
}*/