const { Collection, User } = require("../models");

exports.show = async (req, res) => {
  try {
    const user = req.user.id;
    console.log(user, "user");
    const data = await Collection.findAll({
      where: { userId: user },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (data) {
      res.status(200).send({ data: data });
    } else {
      res.status(404).send({ message: "Data Not Found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Failed to Show Order!" });
    console.log(error);
  }
};
