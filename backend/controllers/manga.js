const axios = require("axios");
exports.index = async (req, res) => {
  search = req.query.search.replace(/\s/g, "-");
  text = encodeURIComponent(search);
  const data = await axios
    .get(`https://kitsu.io/api/edge/anime?filter[text]=${text}`, {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });

  const value = data.data.data
    .map((item, key) => {
      return {
        id: key,
        title: item.attributes.slug.replace("-", " "),
        canonicalTitle: item.attributes.canonicalTitle,
        averageRating: item.attributes.averageRating,
        synopsis: item.attributes.synopsis,
      };
    })
    .filter(
      (item) => item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

  res.send(value);
};
