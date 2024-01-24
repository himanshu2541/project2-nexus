import mongoose from "mongoose";

const FeedBackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name']
  },
  email: {
    type: String,
    required: [true, 'Please provide email']
  },
  message: {
    type: String,
    required: [true, 'Please write something']
  }
}, {
  timestamps: true
})

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide name']
  },
  email: {
    type: String,
    required: [true, 'Please provide email']
  },
  subject: {
    type: String,
    required: [true, 'Please provide subject']
  },
  message: {
    type: String,
    required: [true, 'Please write something']
  }
})

export const Feedback = mongoose.models?.Feedback ||mongoose.model('Feedback', FeedBackSchema)
export const Contact = mongoose.models?.Contact ||mongoose.model('Contact', ContactSchema)
