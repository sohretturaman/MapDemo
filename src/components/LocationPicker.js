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
import { StaticLocationFetcher } from "../util/Location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

export default function LocationPicker() {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused(); // check if the screen is focused or not
  //console.log("route.prams ?**", route.params?.pickedLat);

  const [location, setLocation] = useState({ lng: 0, lat: 0 });

  useEffect(() => {
    if (isFocused && route.params) {
      const pickedLocation = {
        lat: route.params?.pickedLat,
        lng: route.params?.pickedLng,
      };
      setLocation(pickedLocation);
    }
  }, [route, isFocused]); // then will be able to see preview of picked locaiton on the map
  async function getLocationPermission() {
    const permissionInfo = await requestForegroundPermissionsAsync();
    if (permissionInfo.status !== PermissionStatus.GRANTED) {
      Alert.alert("permission denied", "please allow to access a location");
      return false;
    }
    if (permissionInfo.status === PermissionStatus.UNDETERMINED) {
      return permissionInfo.granted;
    }
    return true;
  }
  async function handleOnCurrentLocation() {
    const locationPerState = await getLocationPermission();
    if (!locationPerState) {
      console.log(
        "persimssion is not granted for locaiton , user is denied ",
        locationPerState
      );
    }
    const currentLocation = await getCurrentPositionAsync({});
    console.log("current location ", currentLocation);
    setLocation({
      lng: currentLocation.coords.longitude,
      lat: currentLocation.coords.latitude,
    });
  }

  const locationPreviewUrl = StaticLocationFetcher(location.lat, location.lng); //used google maps static api to got that url
  // console.log("location preview url", locationPreviewUrl); //put in state then use it

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Location</Text>
        {locationPreviewUrl ? (
          <Image style={styles.image} source={{ uri: locationPreviewUrl }} />
        ) : (
          <Text style={styles.text}>
            current location did not pick yet, please clik the below button
          </Text>
        )}

        <Text style={{ alignSelf: "center", fontSize: 12 }}>
          Coords:{location.lat},{location.lng}
        </Text>
      </View>

      <View style={styles.buttonWrapper}>
        <ButtonComp
          buttonTitle={"Current Location "}
          iconName={"my-location"}
          onPress={handleOnCurrentLocation}
        />
        <ButtonComp
          buttonTitle={"View all map "}
          iconName={"zoom-out-map"}
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
