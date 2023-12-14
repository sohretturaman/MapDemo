/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({ title, onChangeText, value }) => {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput
        placeholder={"title"}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
