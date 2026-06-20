export const validateEnquiry = (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  if (!name.trim() || !email.trim() || !phone.trim()) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  next();
};