import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import products from "../../../assets/data/products";
import { Image, StyleSheet } from "react-native";
import ProductListItem from "@/src/components/ProductListItem";

// const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <ProductListItem product={products[0]} />
     <ProductListItem product={products[1]} />
    </View>
  );
}

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
