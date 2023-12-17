/** @format */

import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import Input from "../ui/Input";
import { ScrollView } from "react-native";
import LocationPicker from "./LocationPicker";
import ImagePicker from "./ImagePicker";
import Colors from "../consts/Colors";
import { TextInput } from "react-native";
import ButtonComp from "../ui/ButtonComp";
import { Places } from "../model/PlaceModel";

const PlaceForm = ({ onPlaceFormSubmit }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [savedImageUrl, setSavedImageUrl] = useState();
  const [pickedLocation, setPickedLocation] = useState({ lat: 0, lan: 0 });

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function ImagePickerHandler(imgUrl) {
    setSavedImageUrl(imgUrl);
  }

  const LocationPickerHandler = useCallback((locationInfo) => {
    //!!To avoid unncesesary rerendering use callback func in main  func
    console.log("got data from locationpicker ?", locationInfo);

    setPickedLocation(locationInfo);
  }, []);

  const onSubmitHandler = useCallback(() => {
    if (!enteredTitle || !savedImageUrl || !pickedLocation) {
      Alert.alert("Invalid input", "Please check your input values");
    }
    const placeData = new Places(enteredTitle, savedImageUrl, pickedLocation);
    onPlaceFormSubmit(placeData); //sent to add place screen to send allplaces screen

    setEnteredTitle(""); // Clear the entered title
    setSavedImageUrl(null); // Clear the saved image URL
    setPickedLocation({ lat: 0, lan: 0 }); // Reset the picked location
  }, [enteredTitle, savedImageUrl, pickedLocation]);
  return (
    <ScrollView>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="add a place title"
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onImagePicker={ImagePickerHandler} />
      <LocationPicker onLocationPicker={LocationPickerHandler} />

      <ButtonComp buttonTitle={"Submit location"} onPress={onSubmitHandler} />
    </ScrollView>
  );
};

export default PlaceForm;
//got all provided informations  in this page
const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    margin: 5,
    color: Colors.grayDark,
    fontSize: 18,
    alignSelf: "center",
  },
  input: {
    marginVertical: 8,
    width: "80%",
    alignSelf: "center",
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.grayDark,
    borderBottomWidth: 2,
    backgroundColor: Colors.gray,
    borderRadius: 10,
  },
});
