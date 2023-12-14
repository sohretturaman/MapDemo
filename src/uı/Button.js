/** @format */

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const Button = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({});
