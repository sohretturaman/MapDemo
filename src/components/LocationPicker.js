/** @format */

import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import ButtonComp from "../ui/ButtonComp";
import { StyleSheet } from "react-native";
import Colors from "../consts/Colors";
import {
  requestForegroundPermissionsAsync,
  PermissionStatus,
  getCurrentPositionAsync,
} from "expo-location";
import { LocationFetcher } from "../util/Location";

export default function LocationPicker() {
  const [location, setLocation] = useState({ lng: 0, lat: 0 });

  async function handleOnCurrentLocation() {
    const permissionInfo = await requestForegroundPermissionsAsync();
    if (permissionInfo.status !== PermissionStatus.GRANTED) {
      Alert.alert("permission denied", "please allow to access a location");
    }

    const currentLocation = await getCurrentPositionAsync({});
    console.log("current location ", currentLocation);
    setLocation({
      lng: currentLocation.coords.longitude,
      lat: currentLocation.coords.latitude,
    });
  }

  const locationPreviewUrl = LocationFetcher(location.lat, location.lng);
  console.log("location preview url", locationPreviewUrl);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Location</Text>
      {/** conditional empty view*/}
      <Image style={styles.image} source={{ uri: locationPreviewUrl }} />
      {/** two button for current location and view all map */}

      <Text style={{ alignSelf: "center", fontSize: 12 }}>
        Coords:{location.lat},{location.lng}
      </Text>
      <View style={styles.buttonWrapper}>
        <ButtonComp
          buttonTitle={"Current Location "}
          iconName={"location"}
          onPress={handleOnCurrentLocation}
        />
        <ButtonComp
          buttonTitle={"view all map "}
          iconName={"location-sharp"}
          onPress={() => {
            console.log("view all map button is pressed");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.textLight,
    padding: 5,
    borderRadius: 10,
    width: "90%",
    elevation: 2,
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
  },
  text: {
    color: Colors.primaryDark,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 5,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
    borderRadius: 10,
  },
  imageWrapper: { width: "100%", height: 200, borderRadius: 10 },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: "bold",
    padding: 3,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
});
