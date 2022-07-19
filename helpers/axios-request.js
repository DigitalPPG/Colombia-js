import axios from "axios"
import { getBaseURL } from "./utils"



export const httpRequest = ( endpoint, method = 'POST', data = {} ) => {
    const baseUrl = getBaseURL();
    const url = `${ baseUrl }/${ endpoint }`;
    // console.log('url',url);


    return new Promise((resolve, reject) => {
        axios({
            method,
            url,
            auth:{
                username: 'Comex',
                password: 'Comex2017'
            },
            data:data
            
        }).then((response) => {
            console.log('responseNormal',response);
            resolve({
                
                   data : response.data,
                status : response.status
            });
        }).catch((error) =>{
            if (error.response) {
                resolve({
                    data : error.response.data,
                    status : error.response.status
                });
            } else {
                resolve({'error':'No hay respuesta del servidor'});
            }
        });
    });
}