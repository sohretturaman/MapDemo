/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../consts/Colors";
import ButtonComp from "../ui/ButtonComp";

const PlaceDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log("route .params in placedetails", route.params);
  const data = route.params?.data;

  useEffect(() => {
    navigation.setOptions({
      title: data.title,
    });
  }, []);
  return (
    <View style={styles.continer}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: data?.imgurl }} style={styles.image} />
      </View>
      <Text style={styles.adress}> Address : {data?.address}</Text>
      <ButtonComp
        buttonTitle={"View on Map"}
        iconName={"zoom-out-map"}
        style={{ backgroundColor: Colors.secondaryDark, marginTop: 20 }}
        onPress={() => {
          navigation.navigate("Map", {
            DetailLat: data.lat,
            DetailLng: data.lng,
          });
        }}
      />
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  continer: {
    marginTop: 10,
    padding: 5,
    justifyContent: "center",
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

  imageWrapper: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    alignContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: "bold",
    padding: 3,
  },
  adress: {
    fontWeight: "500",
    color: Colors.grayLight,
    padding: 2,
    alignSelf: "center",
    padding: 5,
  },
});
