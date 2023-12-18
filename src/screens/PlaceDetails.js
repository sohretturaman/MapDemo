/** @format */

import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../consts/Colors";
import ButtonComp from "../ui/ButtonComp";
import { fetchPlaceDetails } from "../util/Database";

const PlaceDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [fetchedData, setFetchedData] = useState();
  const placeId = route.params?.dataId;

  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchPlaceDetails(placeId);
      setFetchedData(data);
    };
    if (fetchedData) {
      navigation.setOptions({
        title: fetchedData.title,
      });
    }

    getDetails();
  }, [navigation, fetchedData]);

  return (
    <View style={styles.continer}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: fetchedData?.imgurl }} style={styles.image} />
      </View>
      <Text style={styles.adress}> Address : {fetchedData?.address}</Text>
      <ButtonComp
        buttonTitle={"View on Map"}
        iconName={"zoom-out-map"}
        style={{ backgroundColor: Colors.secondaryDark, marginTop: 20 }}
        onPress={() => {
          navigation.navigate("Map", {
            data: fetchedData,
          });
        }}
      />
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  continer: {
    marginTop: 10,
    padding: 5,
    justifyContent: "center",
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
    backgroundColor: Colors.grayDark,
    borderRadius: 10,
  },

  imageWrapper: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    alignContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    fontWeight: "bold",
    padding: 3,
  },
  adress: {
    fontWeight: "500",
    color: Colors.grayLight,
    padding: 2,
    alignSelf: "center",
    padding: 5,
  },
});
