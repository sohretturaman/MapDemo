/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/PlacesList";
import { useIsFocused, useRoute } from "@react-navigation/native";
import initDatabase, { InsertPlace, fetchPlaces } from "../util/Database";

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
