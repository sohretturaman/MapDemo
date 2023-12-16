/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../consts/Colors";

const SubmitButton = ({ onPress, buttonTitle }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonWrapper}>
      <Text style={styles.text}>{buttonTitle}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: Colors.textLight,
    padding: 8,
    borderRadius: 10,
    width: "50%",
    alignSelf: "center",
    marginTop: 10,
    alignItems: "center",
    margin: 2,
  },
  text: {
    color: Colors.primaryDark,
    fontWeight: "bold",
    alignSelf: "center",
    paddingHorizontal: 5,
  },
});
