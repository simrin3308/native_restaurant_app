import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import products from "../../../assets/data/products";
import { Image, StyleSheet } from "react-native";
import ProductListItem from "@/src/components/ProductListItem";

// const product = products[0];

export default function TabOneScreen() {
  return (
    <View>
     <ProductListItem product={products[0]} />
     <ProductListItem product={products[1]} />
    </View>
  );
}


