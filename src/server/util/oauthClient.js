import { google } from 'googleapis';
import fs from 'fs';

const data = fs.readFileSync('../googleapi-key.json', 'utf8');
const config = JSON.parse(data);

// TODO: leave the id and secret in environment variables
export const oauthClient = new google.auth.OAuth2(
    config.GOOGLE_CLIENT_ID,
    config.GOOGLE_CLIENT_SECRET,
    'http://localhost:8080/auth/google/callback',
);