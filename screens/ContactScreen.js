import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ContactScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Profile",
      headerStyle: { backgroundColor: "#427dff" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "black",
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <StatusBar backgroundColor="#5288ff" style="light" />
      <Text>This is the Profile screen</Text>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
