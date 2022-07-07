import axios from 'axios';

const url = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message`;
const urlGetList = 'https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/get-list';
const urlPost = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/create-test`;
const urlUpdate = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/update-test`;

//Get Call

export const getMessageTest = async()=>{
    return await axios.get(url,{
        auth:{
            username: 'Comex',
            password: 'Comex2017'
        },
    });
}

//GetList Call 

export const getListApi =  async() => {
    const resp =  await axios.get(urlGetList,{
        auth:{
            username: 'Comex',
            password: 'Comex2017'
        },
    });
    
    const getLists = [];
    console.log('resp',resp);
    if (resp.status === 200) {
        getLists.push(...resp.data)
    }
    return getLists;
}

// Post Test

export const PostList = (userData) => {
    return axios({
        method:'POST',  
        url:`${urlPost}/`,
        auth:{
        username: 'Comex',
        password: 'Comex2017'
    },
    data: userData
    });
}

export const UpdateList = (userData) => {
    return axios.put(`${urlUpdate}?id=${userData.Id}`,userData,{
        auth:{
            username: 'Comex',
            password: 'Comex2017'
        }
    })
}

export const deleteList = (userData) => {
    return axios.put(urlUpdate,userData,{
        auth:{
            username: 'Comex',
            password: 'Comex2017'
        }
    });
}