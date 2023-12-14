/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../ui/Input";
import Button from "../ui/ButtonComp";
import { ScrollView } from "react-native";

const PlaceForm = ({
  onSubmit,
  handleTextInput,
  value,
  title,
  buttonTitle,
}) => {
  const handleOnChange = (val) => {
    handleTextInput(val);
  };
  return (
    <ScrollView>
      <View>
        <Input onChangeText={handleOnChange} title={title} value={value} />
        <Button onPress={onSubmit} buttonTitle={buttonTitle} />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({});
