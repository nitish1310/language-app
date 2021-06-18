import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";

const ContactScreen = ({ navigation }) => {
  const [sound, setSound] = useState();

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

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/correct.mp3")
      // route.params.paramSound
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View>
      <StatusBar backgroundColor="#5288ff" style="light" />
      <Text>This is the Profile screen</Text>
      <View>
        <TouchableOpacity onPress={playSound}>
          <View>
            {/* <Icon name="facebook" style={styles.btnIcon} /> */}
            <AntDesign name="sound" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({});
