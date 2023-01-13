import {React,useState,useEffect} from 'react'
import {  Text,View,Touchablewi,FlatList,ActivityIndicator } from 'react-native'
import {API_URL} from "@env"
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'
import useFetch from '../../hooks/useFetch/useFetch'


function Products({navigation}) {
const {loading,data,error} = useFetch(API_URL)
function renderProduct({item}){
const handleProduct = id =>{
  navigation.navigate("DetailScreen",{id})

}


  if(loading){
    return(
    <ActivityIndicator size="large"  color="#0000ff"></ActivityIndicator>)
  }
  if(error){
    return <Text>{error}</Text>
  }
  return(
    
  <ProductCard product={item} onSelect={() => handleProduct(item.id)} ></ProductCard>)
}


  return (
  <View >
  <FlatList data={data}  keyExtractor={item => item.id} renderItem={renderProduct} ></FlatList>

  </View>
    
  )
}

export default Products

