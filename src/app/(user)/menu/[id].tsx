import React from "react";
import { Text, View } from "../../../components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import Button from "@/src/components/Buttton";
import { useCartContext } from "@/src/providers/CartProvider";
import { Product } from "@/assets/types";

const sizes = ["S", "M", "L", "XL", "2XL"];
const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products?.find((product) => product.id.toString() === id);

  const [selectedSize, setSelectedSize] = React.useState<string | undefined>('M');

  if (!product) {
    return <Text>Product not found</Text>;
  }
  const { addItem }: any = useCartContext()

  const addToCart = (a : Product,b:any) => {
    addItem(a,b) 
  }


  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name + id }} />
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text>Select size</Text>

      {/* USE MAP METHOD WHERE WE NEED TO RENDER DATA FROM ONE FORM TO OTHER FORM..... Here > STRINGS TO JSX >>> Key is necessary*/}
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable onPress={() => setSelectedSize(size)} key={size} style={[styles.size, {backgroundColor: selectedSize === size ? "gainsboro" : "white"}]}>
            <Text style={[styles.textSize, {color: selectedSize === size ? "black" : "gray"}]}>{size}</Text>
          </Pressable>
        ))}

        

        {/* <FlatList data={sizes} renderItem={({ item }) => <Text>{item}</Text>} /> */}
      </View>

      <Text style={styles.price}>${product.price}</Text>

      <Button onPress={() => addToCart(product, selectedSize)} text="Add to cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //take all the available space height and width
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
   marginTop: "auto",
    // textAlign: "center",
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    
    marginVertical: 10,
  },
  size: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    
  },
  textSize: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
});

export default ProductDetailsScreen;
