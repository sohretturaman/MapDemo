/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import Colors from "../consts/Colors";
import { useNavigation } from "@react-navigation/native";
import ButtonComp from "../ui/ButtonComp";

const ImagePicker = ({ onImagePicker }) => {
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

  async function handleCameraPress() {
    const cameraPermissionState = await getPermission(); // returns true or false
    if (cameraPermissionState == false) {
      console.log("could not initialize the camera", cameraPermissionState);

      return;
    }
    const cameraResponse = await launchCameraAsync({
      allowsEditing: true,
      aspect: [20, 10],
      quality: 0.8,
    });
    if (!cameraResponse.canceled) {
      //   console.log("image url is saved uri", cameraResponse.assets[0].uri);

      setImageurl(cameraResponse.assets[0].uri);
      onImagePicker(cameraResponse.assets[0].uri); //sent data to place form to submit
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
          <Text style={styles.text}> no image taken yet !</Text>
        )}
      </View>
    );
  };

  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={{ alignSelf: "center", fontSize: 12 }}>
          place :tokyo / japan
        </Text>
        <ImgaePreview />
        <ButtonComp
          buttonTitle={"add a photo"}
          iconName={"camera-alt"}
          onPress={handleCameraPress}
        />
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  continer: {
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: Colors.primaryDark,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 5,
  },
  wrapper: {
    backgroundColor: Colors.gray,
    padding: 5,
    borderRadius: 10,
    width: "90%",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
  },
  imageWrapper: {
    alignItems: "center",
    width: "90%",
    height: 200,
    margin: 5,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    borderRadius: 10,
  },
});
