import { getGoogleOauthUrlRoute } from './getGoogleOauthUrlRoute.js';
import { googleOauthCallbackRoute } from './googleOauthCallbackRoute.js';

export const routes = [
    getGoogleOauthUrlRoute,
    googleOauthCallbackRoute
]