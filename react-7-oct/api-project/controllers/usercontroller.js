const User = require("../models/User");

async function addUser(req, res) {
  try {
    console.log("imported body from reactJs", req.body);
    let user = new User(req.body);
    await user.save();
    console.log("user added successfully");
    let users = await User.find({});
    console.log(users,'users')
    res.status(200).send({success : true , message: 'data saved successfully', users: users});
  } catch (error) {
    console.error("chech once again the addUser Function", error);
    res.status(400).send({success : false , message: 'something went wrong'});

  }
}

module.exports = { addUser };
