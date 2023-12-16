/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PlaceForm from "../components/PlaceForm";
import { useRoute } from "@react-navigation/native";

const AddPlace = () => {
  return (
    <View>
      <PlaceForm />
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({});
