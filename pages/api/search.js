import axios from "axios";
export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://ott-details.p.rapidapi.com/search",
    params: { title: req.query.title, page: "1" },
    headers: {
      "x-rapidapi-host": "ott-details.p.rapidapi.com",
      "x-rapidapi-key": '3a6a462683msh09ffe98c1d2cd54p162086jsn5c56c8329b84',
    },
  };
  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
