import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import styles from '../styles/Home.module.css'
import { getListApi, PostList } from './api/CallApis'
import PostListComp from './Post'
import Post from './Post'
import { Update } from './Update'

export default  function GetList() {

  
  const [getList, setGetList] = useState([]);
  useEffect(()=>{
    // axios.get(urlGetList,{
    //   auth: {
    //       username: 'Comex',
    //       password: 'Comex2017'
    //   }
    // }).then(res => {
    //   setGetList(res.data)
    // })
    getAll()
  },[]);   
  const urlGetList = 'https://servicios.devaxxess.com.mx/Comex.TI.PortalCliente.WebApi/api/test/get-list';
//    const getAll = async()=>{
//     const resp = await axios.get(urlGetList,{
//         auth:{
//             username: 'Comex',
//             password: 'Comex2017'
//         },
//     });
//     setGetList(resp.data)
// }
    
      // const getAll = useCallback( async ( ) => {
      //   let response = await getListApi();
        
      //   setGetList(response);
      // })
    

      const getAll = () =>{
        getListApi().then(async(getLists) => {
          setGetList(getLists)
        })
      }
    // const newMessage =  getListApi();
    console.log('newMessage',getList);

    

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Get Test</a>
        </h1>
          {getList?.map((list) => (
            <div key={list?.Nombre} >{list.Nombre}</div>
          ))}
      
      {/* {data?.map((list) => (
            <div key={list?.Nombre}> {list?.Nombre}</div>
          ))} */}
        <PostListComp 
            getAll={getAll} 
        />
        <Update 
            getAll={getAll} 
        />
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
