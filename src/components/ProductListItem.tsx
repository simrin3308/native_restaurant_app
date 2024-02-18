import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";
import { Product } from "@/assets/types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};
const url =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";
const ProductListItem = ({ product }: ProductListItemProps) => {
  // view >  div without onclick
  // link > a with onclick
  // pressable > div with onclick
  return (
    // (tab) > these are optional parameters. we don't need to give them.
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          resizeMode="contain" //whole image is visible
          source={{ uri: product.image || url }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text>${product.price}</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "45%",
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
