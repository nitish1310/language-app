import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Post from "./Post";

const Posts = () => {
  return (
    <View>
      <Post key={1} name={PostName} />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({});
