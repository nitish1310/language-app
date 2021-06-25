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
// import { db, auth } from "../firebase";
// import firebase from "firebase/app";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(0);
  const [weatherData, setWeatherData] = useState([]);

  // let language = route.params.paramLang;
  // const url =
  //   "https://43f6215f6512.ngrok.io/weather/" +
  //   language +
  //   "/" +
  //   route.params.paramWord;

  const url = "https:///f46816d567f8.ngrok.io/weather/Pune/1";
  // "https://jsonplaceholder.typicode.com/users/";
  // "https://jsonplaceholder.typicode.com/users/" + route.params.paramKey;
  //   console.log(route.params.paramWord);
  //   console.log(language);
  //   console.log(url);

  const getWeatherData = (cityName, value) => {
    axios
      // .get(`${url}`)
      .get(`https:///f46816d567f8.ngrok.io/weather/${cityName}/${value}`)
      .then((response) => {
        const allWeatherData = response.data;
        // for (var i = 0; i < response.data.length; i++) {
        //   if (allTranslatedWordData[i].username == "Bret") {
        console.log(allWeatherData);
        // const tempData = allTranslatedWordData[i];
        setWeatherData(allWeatherData);
        //   }
        // }
      })
      .catch((error) => console.error(`Error: ${error}`));

    //     fetch("https://restcountries.eu/rest/v2/region/africa?fields=name")
    //       .then((response) => response.json())
    //       .then((json) => setWordData(json))
    //       .catch((error) => console.error(error));
  };

  useEffect(() => {
    // getWeatherData();
  }, []);

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
    });
  }, [navigation]);

  const sendMessage = () => {
    setInput(input);
    setMessages(1);
    // var res = input.substring(6);
    var res = input.split(" ").splice(-1)[0];

    var temperatureStr = input.substring(11, 22);
    console.log(temperatureStr);
    //Check
    if (temperatureStr === "temperature") {
      getWeatherData(res, 2);
    } else {
      getWeatherData(res, 1);
    }

    // this.textInput.clear();
  };

  //   const sendMessage = () => {
  //     Keyboard.dismiss();

  //     db.collection("chats").doc(route.params.id).collection("messages").add({
  //       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //       message: input,
  //       displayName: auth.currentUser.displayName,
  //       email: auth.currentUser.email,
  //       photoURL: auth.currentUser.photoURL,
  //     });

  //     setInput("");
  //   };

  //   useLayoutEffect(() => {
  //     const unsubscribe = db
  //       .collection("chats")
  //       .doc(route.params.id)
  //       .collection("messages")
  //       .orderBy("timestamp", "desc")
  //       .onSnapshot((snapshot) =>
  //         setMessages(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );

  //     return unsubscribe;
  //   }, [route]);

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
                    {weatherData.weather}
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
