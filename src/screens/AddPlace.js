/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PlaceForm from "../components/PlaceForm";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddPlace = () => {
  const navigation = useNavigation();

  function handlePlaceData(data) {
    console.log("place data in add place", data);

    navigation.navigate("AllPlaces", { placeData: data });
  }
  return (
    <View>
      <PlaceForm onPlaceFormSubmit={handlePlaceData} />
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({});
