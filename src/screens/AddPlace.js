/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PlaceForm from "../components/PlaceForm";
import { launchCameraAsync, useCameraPermissions } from "expo-image-picker";

const AddPlace = () => {
  const [title, setTitle] = useState("");

  function handleTextInput(value) {
    setTitle(value);
    console.log("title", value);
  }
  async function handleCameraPress() {
    const cameraResponse = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    console.log("camera respponse", cameraResponse);
  }
  return (
    <View>
      <PlaceForm
        title={"write a place name"}
        handleTextInput={handleTextInput}
        value={title}
        onSubmit={handleCameraPress}
        buttonTitle={"add a new place"}
      />
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({});
