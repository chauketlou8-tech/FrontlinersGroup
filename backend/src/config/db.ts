//function to connect to the database

import mongoose from 'mongoose';

class connectDB {
    connect (url: string) {
        return mongoose.connect(url);
    }
}

export default new connectDB();