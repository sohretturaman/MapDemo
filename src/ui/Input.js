/** @format */

import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../consts/Colors";

const Input = ({ title, onChangeText, value }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={"tokyo..."}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    padding: 10,
    color: Colors.backgroundDark,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: Colors.backgroundDark,
    padding: 5,
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
  },
});
