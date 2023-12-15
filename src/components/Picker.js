/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Camera } from "expo-camera";
import PlaceForm from "./PlaceForm";
import Colors from "../consts/Colors";

const Picker = () => {
  const [title, setTitle] = useState("");
  const [cameraInfo, requestPermissionInfo] = useCameraPermissions();
  const [imageurl, setImageurl] = useState(null);

  async function getPermission() {
    if (cameraInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionState = await requestPermissionInfo(); //async fucntion waits  for users response
      return permissionState.granted;
    }
    if (cameraInfo.status === PermissionStatus.DENIED) {
      console.log("permissionis denied", cameraInfo);
      return false;
      //return cameraInfo.canAskAgain; tried to ask again to get permission
    }
    return true;
  }

  function handleTextInput(value) {
    setTitle(value);
    console.log("title", value);
  }

  async function handleCameraPress() {
    const cameraPermissionState = await getPermission(); // returns true or false
    if (cameraPermissionState == false) {
      console.log("could not initialize the camera", cameraPermissionState);

      return;
    }
    const cameraResponse = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    if (!cameraResponse.canceled) {
      console.log("image url is saved uri", cameraResponse.assets[0].uri);

      setImageurl(cameraResponse.assets[0].uri);
    }

    if (cameraResponse.canceled) {
      console.log(
        "could not intialize the camera with launch camera async , response is ",
        cameraResponse.canceled
      );
    }
  }

  const ImgaePreview = () => {
    return (
      <View style={styles.imageWrapper}>
        {imageurl ? (
          <Image source={{ uri: imageurl }} style={styles.image} />
        ) : (
          <Text> no image taken yet !</Text>
        )}
      </View>
    );
  };
  return (
    <View>
      <PlaceForm
        title={"write a place name"}
        handleTextInput={handleTextInput}
        value={title}
        onSubmit={handleCameraPress}
        buttonTitle={"add a new place"}
      />
      <ImgaePreview />
    </View>
  );
};

export default Picker;

const styles = StyleSheet.create({
  continer: {
    justifyContent: "center",
    flex: 1,
  },
  imageWrapper: {
    alignItems: "center",
    width: "90%",
    height: 200,
    margin: 10,
    alignContent: "center",
    backgroundColor: Colors.grayLight,
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
});
