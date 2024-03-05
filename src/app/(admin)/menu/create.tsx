import Button from "@/src/components/Buttton";
import React, { useState, useEffect } from 'react';
import { Text, View } from "@/src/components/Themed";
import Colors from "@/src/constants/Colors";
import { Alert, Image, StyleSheet, TextInput } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState(null);

  const id = useLocalSearchParams().id;
  console.log(id);
  const isUpdating = !!id;
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onCreateHandler = () => {
    if (!validateInput()) return;
    console.log(name);
    console.log(price);
  };
  const onUpdateHandler = () => {
    if (!validateInput()) return;
    console.log(name);
    console.log(price);
  };

  const onDeleteHandler = () => {
    console.log("delete");
    
  }

  const confirmDelete = () => {
    Alert.alert("Confirm Delete", "Are you sure you want to delete this product?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: onDeleteHandler,
      }
    ])
  };

  const validateInput = () => {
    if (!name || !price) {
      setErrors("All fields are required");
      return;
    }
    if (name.length < 5) {
      setErrors("At least 5 characters are required for name");
      return;
    }

    if (isNaN(parseInt(price))) {
      setErrors("Price must be a number");
      return;
    }

    setErrors("");
    return true;
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: isUpdating ? "Update Product" : "Create Product" }} />

      <Image source={{ uri: image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" }} style={styles.image} />

      <Text onPress={pickImage} style={styles.btnText}>Select Image</Text>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Name"
      />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        placeholder="9.99"
        keyboardType="numeric"
      />
      {errors && <Text style={{ color: "red" }}>{errors}</Text>}

      <Button text="Submit" onPress={ isUpdating ? onUpdateHandler : onCreateHandler} />
      {/* <Button text="Clear" onPress={resetFields} /> */}
     {isUpdating && <Button text="Delete" onPress={confirmDelete} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    // backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
    borderColor: "#CCC",
    borderWidth: 1,
  },
  label: {
    color: "gray",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    // aspectRatio: 3/4,
    alignSelf: "center",
  },
  btnText: {
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 10,
    color: Colors.light.tint

  }
});

export default CreateProductScreen;
