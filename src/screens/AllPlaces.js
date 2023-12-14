/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PlacesList from "../components/PlacesList";

const DummyData = [
  {
    id: "2324",
    title: "japan",
    imgurl: "https://picsum.photos/200/150",
    location: "",
    adress: "japan/tokyo",
  },
];
const AllPlaces = () => {
  return (
    <View>
      <PlacesList placeData={DummyData} />
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({});
