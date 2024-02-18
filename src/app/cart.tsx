import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import { useCartContext } from "../providers/CartProvider";
import CartListItem from "../components/CartListComponent";
import Button from "../components/Buttton";

export default function CartScreen() {
  const { items, total }: any = useCartContext();
  return (
    <>
      {items.length === 0 ? (
        <Text>No items in cart</Text>
      ) : (
        <View>
          <FlatList
            data={items}
            renderItem={({ item }) => <CartListItem cartItem={item} />}
            contentContainerStyle={{ gap: 10, padding: 10 }}
          />

          <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>
            Total : $ {total}
          </Text>

          <Button text="Checkout" style={styles.container} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button:{
    marginTop: 202
  }
});
