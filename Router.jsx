import {React,useState,useEffect} from 'react'
import { View,Text,Button,FlatList,ActivityIndicator } from 'react-native'
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from "./pages/Products/Products"
import Detail from "./pages/Detail/Detail"
import {API_URL} from "@env"


const Stack = createNativeStackNavigator()


function Router() {
 

  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name='ProductsScreen' component={Products} options={{title:"Dolap",headerTintColor:"#b06bff",headerTitleAlign:"center"}}  ></Stack.Screen>
    <Stack.Screen name='DetailScreen' options={{title:"Detail",headerTintColor:"#b06bff",headerTitleAlign:"center"}} component={Detail} ></Stack.Screen>
  </Stack.Navigator>
</NavigationContainer>

  )
  
}

export default Router