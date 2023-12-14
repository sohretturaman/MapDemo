/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../consts/Colors";

const Button = ({ onPress, buttonTitle }) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonWrapper}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.text}>{buttonTitle}</Text>
        <Ionicons name="camera" size={20} color={Colors.primaryDark} />
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: Colors.textLight,
    padding: 5,
    borderRadius: 10,
    width: "50%",
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
});
