/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Input from "../ui/Input";
import { ScrollView } from "react-native";
import LocationPicker from "./LocationPicker";
import ImagePicker from "./ImagePicker";
import Colors from "../consts/Colors";
import { TextInput } from "react-native";
import ButtonComp from "../ui/ButtonComp";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

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
      <ImagePicker />
      <LocationPicker />

      <ButtonComp
        buttonTitle={"Submit location"}
        onPress={() => {
          console.log("subbmit pressed");
        }}
      />
    </ScrollView>
  );
};

export default PlaceForm;

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
