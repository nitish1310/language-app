import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(0);
  const [weatherData, setWeatherData] = useState([]);
  const [result, setResult] = useState(null);

  // const url = "https:///f46816d567f8.ngrok.io/weather/Pune/1";

  const getWeatherData = (inputStatement) => {
    // axios
    //   // .get(`${url}`)
    //   .get(`https:///e7d59392774c.ngrok.io/weather/${cityName}/${value}`)
    //   .then((response) => {
    //     const allWeatherData = response.data;

    //     console.log(allWeatherData);

    //     setWeatherData(allWeatherData);
    //   })
    //   .catch((error) => console.error(`Error: ${error}`));

    axios
      // .get(`https://74d437c5351e.ngrok.io/weather/bridgeport/1`)
      .get(`https:///e7d59392774c.ngrok.io/user/${inputStatement}/en`)
      .then((res) => {
        const persons = res.data;

        setWeatherData(persons);
        // this.setState({ persons });
        console.log(persons.res);
        // const msg = new SpeechSynthesisUtterance(persons.weather);
        // window.speechSynthesis.speak(msg);
        // let audioPlay = new Audio(soundRes);
        // audioPlay.play();
        // this.fun(persons.res);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // useEffect(() => {
  //   // getWeatherData();
  // }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chats",
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
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={_handlePressButtonAsync}
        >
          <FontAwesome name="microphone" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const sendMessage = () => {
    setInput(input);
    setMessages(input);

    getWeatherData(input);

    // var res = input.split(" ").splice(-1)[0];

    // var temperatureStr = input.substring(11, 22);
    // console.log(temperatureStr);
    // //Check
    // if (temperatureStr === "temperature") {
    //   getWeatherData(res, 2);
    // } else {
    //   getWeatherData(res, 1);
    // }
    // this.textInput.clear();
  };

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://speech-9cd70.web.app/intents",
      { showTitle: false },
      { toolbarColor: "#000000" }
    );

    setResult(result);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={150}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView contentContainerStyle={{ paddingTop: 15 }}>
              {weatherData == "" ? (
                <View></View>
              ) : (
                <View
                  //    key={id}
                  style={styles.receiver}
                >
                  <Avatar
                    position="absolute"
                    rounded
                    //Web
                    containerStyle={{
                      position: "absolute",
                      bottom: -15,
                      right: -5,
                    }}
                    bottom={-15}
                    right={-5}
                    size={30}
                    source={{
                      // uri: data.photoURL,
                      uri: "https://e7.pngegg.com/pngimages/498/917/png-clipart-computer-icons-desktop-chatbot-icon-blue-angle.png",
                    }}
                  />
                  <Text style={styles.receiverText}>
                    {/* Smart ChatBot Response Message */}
                    {/* {weatherData.map((data) => (
                    <Text>{data.weather} </Text>
                  ))} */}
                    {weatherData.res}
                  </Text>
                </View>
              )}
              {messages == 0 ? (
                <View></View>
              ) : (
                <View
                  //  key={id}
                  style={styles.sender}
                >
                  <Avatar
                    position="absolute"
                    rounded
                    //Web
                    containerStyle={{
                      position: "absolute",
                      bottom: -15,
                      left: -5,
                    }}
                    bottom={-15}
                    left={-5}
                    size={30}
                    source={{
                      // uri: data.photoURL,
                      uri: "https://eshendetesia.com/images/user-profile.png",
                    }}
                  />
                  <Text style={styles.senderText}>
                    {/* User's Sample Message */}
                    {input}
                    {/* {data.message} */}
                  </Text>
                  <Text style={styles.senderName}>
                    {/* "Display Name" */}
                    {/* {data.displayName} */}
                  </Text>
                </View>
              )}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput
                // ref={(textIn) => {
                //   this.textInput = textIn;
                // }}
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={sendMessage}
                placeholder="Your Message"
                style={styles.textInput}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name="send" size={24} color="#2B68E6" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  receiver: {
    padding: 15,
    backgroundColor: "#e8e7e3",
    alignSelf: "flex-end",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "#2B68E6",
    alignSelf: "flex-start",
    borderRadius: 20,
    marginLeft: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",
  },
  senderText: {
    color: "white",
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 15,
  },
  receiverText: {
    color: "black",
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 15,
  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#e8e7e3",
    // borderWidth: 1,
    padding: 10,
    color: "grey",
    borderRadius: 30,
  },
});
