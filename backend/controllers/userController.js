// Get user profile (protected)
exports.getProfile = async (req, res) => {
  res.json(req.user);
};