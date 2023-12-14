/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ placeData }) => {
  return (
    <View>
      <FlatList
        data={placeData}
        renderItem={({ item }) => <PlaceItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PlacesList;

const styles = StyleSheet.create({});
