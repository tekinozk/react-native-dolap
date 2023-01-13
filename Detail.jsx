import React from 'react'
import { Text,View,Image,ActivityIndicator } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch'
import {API_URL} from "@env"
import style from "./Detail.style"


function Detail({route}) {
 
  const {id} = route.params
  const {loading,data,error} = useFetch(`${API_URL}/${id}`)
 



if(loading){
  return(
  <ActivityIndicator size="large"  color="#0000ff"></ActivityIndicator>)
}
if(error){
  return <Text>{error}</Text>
}

  return (

<View style={style.container} >
  <Image style={style.image} source={{uri:data.image}} ></Image>
  <View style={style.bodyContainer} >
  <Text style={style.title}>{data.title}</Text>
    <Text style={style.desc} >{data.description}</Text>
    <Text style={style.price} >{data.price} $</Text>
  </View>
   
</View>  )
}

export default Detail