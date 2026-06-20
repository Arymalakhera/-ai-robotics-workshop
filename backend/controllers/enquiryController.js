import fs from 'fs';
import path from 'path';

export const createEnquiry = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required."
      });
    }

    const filePath = path.resolve('enquiries.json');
    
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const enquiries = JSON.parse(fileData || '[]');

    const newEnquiry = {
      id: enquiries.length + 1,
      name,
      email,
      phone,
      submittedAt: new Date().toISOString()
    };

    enquiries.push(newEnquiry);
    fs.writeFileSync(filePath, JSON.stringify(enquiries, null, 2));

    return res.status(201).json({
      success: true,
      message: "Registration Successful",
      data: newEnquiry
    });

  } catch (error) {
    console.error("❌ Submission handling error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error. Please try again later."
    });
  }
};