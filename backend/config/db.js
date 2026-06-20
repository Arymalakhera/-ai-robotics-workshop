import fs from 'fs';
import path from 'path';

const connectDB = async () => {
  try {
    console.log("🚀 Local JSON File Database System Activated Successfully!");
    
    const filePath = path.resolve('enquiries.json');
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    }
  } catch (error) {
    console.error("Database initialization error:", error.message);
  }
};

export default connectDB;