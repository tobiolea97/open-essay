import { google } from 'googleapis';


import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

export const oauthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:3000/auth/google/callback',
);