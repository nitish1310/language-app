import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Post = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
