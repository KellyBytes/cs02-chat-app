import { config } from 'dotenv';
import connectDB from '../lib/db.js';
import User from '../models/user.model.js';

config();

const seedUsers = [
  // Female users
  {
    email: 'emma.thompson@example.com',
    fullName: 'Emma Thompson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    email: 'olivia.miller@example.com',
    fullName: 'Olivia Miller',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    email: 'sophia.davis@example.com',
    fullName: 'Sophia Davis',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    email: 'emily.wilson@example.com',
    fullName: 'Emily Wilson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    email: 'ava.brown@example.com',
    fullName: 'Ava Brown',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    email: 'isabella.jones@example.com',
    fullName: 'Isabella Jones',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    email: 'emily.anderson@example.com',
    fullName: 'Emily Anderson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    email: 'mia.thompson@example.com',
    fullName: 'Mia Thompson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    email: 'charlotte.miller@example.com',
    fullName: 'Charlotte Miller',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    email: 'amelia.davis@example.com',
    fullName: 'Amelia Davis',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  // Male users
  {
    email: 'james.miller@example.com',
    fullName: 'James Miller',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    email: 'john.davis@example.com',
    fullName: 'John Davis',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    email: 'michael.wilson@example.com',
    fullName: 'Michael Wilson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    email: 'william.brown@example.com',
    fullName: 'William Brown',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    email: 'david.jones@example.com',
    fullName: 'David Jones',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    email: 'robert.anderson@example.com',
    fullName: 'Robert Anderson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    email: 'charles.thompson@example.com',
    fullName: 'Charles Thompson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    email: 'joseph.miller@example.com',
    fullName: 'Joseph Miller',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    email: 'george.davis@example.com',
    fullName: 'George Davis',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    email: 'joseph.wilson@example.com',
    fullName: 'Joseph Wilson',
    password: 'Sampl3Passw0rd',
    profilePic: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
