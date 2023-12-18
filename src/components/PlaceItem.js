/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../consts/Colors";
import { useNavigation } from "@react-navigation/native";

const PlaceItem = ({ data }) => {
  const navigation = useNavigation();
  function handleNavigateDetails() {
    navigation.navigate("PlaceDetails", { dataId: data.id });
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}
      onPress={handleNavigateDetails}
    >
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: data?.imgurl }} style={styles.image} />
      </View>
      <Text style={styles.adress}> adress: {data?.address}</Text>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.textLight,
    padding: 5,
    borderRadius: 10,
    width: "90%",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: Colors.primaryDark,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 5,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.grayDark,
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  imageWrapper: { width: "100%", height: 200, borderRadius: 10 },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: "bold",
    padding: 3,
  },
  adress: {
    fontWeight: "500",
    color: Colors.black,
    padding: 2,
  },
});
