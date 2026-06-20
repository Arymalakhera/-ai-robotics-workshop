import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is strictly required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email field is strictly required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number field is strictly required'],
    trim: true
  }
}, {
  timestamps: true
});

const Enquiry = mongoose.model('Enquiry', enquirySchema);
export default Enquiry;