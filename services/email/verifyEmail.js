const { HttpError, ctrlWrapper } = require("../../helpers");
const { User } = require("../../models");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new HttpError(404, "User not found");
  }
  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });
  res.status(200).json({
    code: 200,
    message: "Verification successful",
  });
};

module.exports = ctrlWrapper(verifyEmail);