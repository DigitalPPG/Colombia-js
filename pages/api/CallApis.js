import axios from 'axios';
import { httpRequest } from '../../helpers/axios-request';

// const url = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message`;
// const urlGetList = 'https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/get-list';
// const urlPost = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/create-test`;
// const urlUpdate = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/update-test`;
// const urlDelete = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/delete-test`;



//TODO Update all request to the new structure GET

 export const getAllInfo = async( ) => {
    const respGetAll = await httpRequest('get-list','GET');
    if (respGetAll.status === 200) {
        return respGetAll.data;
    }
 }

 //TODO new structure CREATE

 export const createInfo = async( infoData ) =>{
    const resp = await httpRequest( 'create-test', 'POST', infoData );
    console.log('respNuevoFormato',resp);
    return resp;
 }

 //TODO UPDATE
 export const updateInfo = async( infoData ) => {
    const resp = await httpRequest( `update-test/${infoData.Id}`, 'PUT', infoData );
    
    return resp;
 }

 //TODO DELETE
 export const deleteInfo = async( infoData ) => {
    const resp = await httpRequest( `delete-test/${infoData.Id}` , 'DELETE' );
    return resp;
 }
 

 

//Get Call

// export const getMessageTest = async()=>{
//     return await axios.get(url,{
//         auth:{
//             username: 'Comex',
//             password: 'Comex2017'
//         },
//     });
// }

//GetList Call 

// export const getListApi =  async() => {
//     const resp =  await axios.get(urlGetList,{
//         auth:{
//             username: 'Comex',
//             password: 'Comex2017'
//         },
//     });

//     const getLists = [];
//     console.log('resp',resp);
//     if (resp.status === 200) {
//         getLists.push(...resp.data)
//     }else{
//         console.log('error');
//     }

//     return getLists;
// }

// TODO: Post Test 

// export const PostList = (userData) => {
//     console.log('userData',userData);
//     return axios({
//         method:'POST',  
//         url:`${urlPost}`,
//         auth:{
//         username: 'Comex',
//         password: 'Comex2017'
//     },
//     data: userData
//     });
// }

// export const UpdateList = (userData) => {
//     return axios.put(`${urlUpdate}/${userData.Id}`,userData,{
//         auth:{
//             username: 'Comex',
//             password: 'Comex2017'
//         }
//     })
// }

// export const deleteList = (userData) => {
//     return axios.put(`${urlDelete}?id=${userData.Id}`,userData,{
//         auth:{
//             username: 'Comex',
//             password: 'Comex2017'
//         }
//     });
// }