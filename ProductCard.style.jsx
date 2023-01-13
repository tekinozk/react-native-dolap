import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{backgroundColor:"#ffebeb",
borderWidth:0.3,
margin:6,
flexDirection:"row",

},
    image:{width:100,
        minHeight:100,
    
resizeMode:"contain",
backgroundColor:"white"
},
    bodyContainer:{padding:10,
        flex:1,
        justifyContent:"space-between",
       
    
    },
    title:{ 
        fontWeight:"bold",
        fontSize:18,
     },
    price:{marginTop:10,
        textAlign:"right",
        fontSize:16,
        fontWeight:"bold"
    },

})


export default styles