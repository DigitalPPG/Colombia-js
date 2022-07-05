import axios from 'axios';

const url = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/hello-message`;
const urlGetList = 'https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/get-list';
const urlPost = `https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/create-test`;



//Get Call

export const getMessageTest = async()=>{

    return await axios.get(url,{

        auth:{

            username: 'Comex',
            password: 'Comex2017'

        },
    });

}

export const getPinturas = async()=>{

    return await axios.post(urlGetList)

}

//GetList Call 

export const getListApi = async () => {

    return await axios.get(urlGetList,{

        auth:{
            // username: 'Comex',
            password: 'Comex2017'
        },

    }).catch(error => alert(error.message))
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
    })

}
