import React from 'react'
import { Text,View,Image,TouchableWithoutFeedback } from 'react-native'
import styles from "./ProductCard.style"




function ProductCard({product,onSelect}) {
  return (
<TouchableWithoutFeedback onPress={onSelect} >
<View style={styles.container}>
      <Image style={styles.image} source={{uri:product.image}} >
      </Image>
      <View style={styles.bodyContainer} >
<Text style={styles.title}>{product.title}</Text>
<Text style={styles.price}>{product.price} $</Text>
      </View>

    </View>
</TouchableWithoutFeedback>
   

 )
}

export default ProductCard