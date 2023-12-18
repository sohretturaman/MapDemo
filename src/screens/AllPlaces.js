/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/PlacesList";
import { useIsFocused, useRoute } from "@react-navigation/native";
import initDatabase, { InsertPlace, fetchPlaces } from "../util/Database";

const DummyData = [
  {
    title: "japan",
    imgurl: "https://picsum.photos/200/150",
    location: { lat: "943", lng: "0987" },
    adress: "japan/tokyo",
  },
];
const AllPlaces = () => {
  const isFocused = useIsFocused();
  const [placesData, setPlacesData] = useState([]);

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setPlacesData(places);
    }

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);
  return (
    <View>
      <PlacesList placeData={placesData} />
    </View>
  );
};

export default AllPlaces;
//change the output type of the data
const styles = StyleSheet.create({});
