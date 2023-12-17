/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PlacesList from "../components/PlacesList";
import { useIsFocused, useRoute } from "@react-navigation/native";

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
  const route = useRoute();
  const isFocused = useIsFocused();
  const [placesData, setPlacesData] = useState([]);
  //kodu kontrol et !!
  useEffect(() => {
    // console.log("place data in all places", route.params?.placeData);

    if (isFocused && route.params) {
      if (isFocused && route.params) {
        const newPlace = route.params.placeData;
        if (!placesData.some((place) => place.id === newPlace.id)) {
          setPlacesData((currentVals) => [...currentVals, newPlace]);
        }
      }
    }
    console.log(
      "uzunluk",
      placesData?.map((place) => place.title)
    );
  }, [route.params, isFocused]);
  return (
    <View>
      <PlacesList placeData={placesData} />
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({});
