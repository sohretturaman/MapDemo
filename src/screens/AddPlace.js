/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PlaceForm from "../components/PlaceForm";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";
import { insertPlace } from "../util/Database";

const AddPlace = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  //check if isfocused is necessary or not
  async function handlePlaceData(data) {
    await insertPlace(data); //inesrting data
    navigation.navigate("AllPlaces"); //navigating a page to another page like a bridge
  }
  return (
    <View>
      <PlaceForm onPlaceFormSubmit={handlePlaceData} />
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({});
