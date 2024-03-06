import OrderItemListItem from '@/src/components/OrderListItem';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import orders from '@/assets/data/orders';
import OrderListItem from '@/src/components/OrderListItem';
export default function OrdersScreen() {
//   const { data: orders, isLoading, error } = useMyOrderList();

//   if (isLoading) {
//     return <ActivityIndicator />;
//   }
//   if (error) {
//     return <Text>Failed to fetch</Text>;
//   }

console.log(orders);


  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}