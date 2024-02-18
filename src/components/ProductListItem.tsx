import React from "react";
import { Image, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import { Product } from "@/assets/types";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || "" }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
