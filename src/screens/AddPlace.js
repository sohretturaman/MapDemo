/** @format */

import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PlaceForm from "../components/PlaceForm";

const AddPlace = () => {
  const [title, setTitle] = useState("");

  function handleTextInput(value) {
    setTitle(value);
    console.log("title", value);
  }
  return (
    <View>
      <PlaceForm
        title={"write a place name"}
        handleTextInput={handleTextInput}
        value={title}
        onSubmit={() => console.log("presseed to button ")}
        buttonTitle={"add a new place"}
      />
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({});
