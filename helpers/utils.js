import { env } from "../enviroment";

export const getBaseURL = (() => {
    let baseUrl = null;
    // switch ( process.env.NODE_ENV ) {
    //     case env.NODE_ENV_PROD:
    //         baseUrl = env.APP_API_URL_PROD
    //         break;
    
    //     default:
    //         break;
    // }
    baseUrl = env.APP_API_URL_PROD;
    return baseUrl;
});