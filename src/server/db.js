import mongoose from 'mongoose';
import pkg from 'mongodb';
const { MongoClient } = pkg;

let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect('mongodb://localhost:27017/open-essay', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export const getDbConnection = dbName => {
    const db = client.db(dbName);
    return db;
}

export const intializeMongooseConnection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/open-essay', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongoose connection established');
    } catch (error) {
        console.log('Mongoose connection failed');
    }
}
