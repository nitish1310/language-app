import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StatusBar,
  Picker,
} from "react-native";
import * as Animatable from "react-native-animatable";

import DropDownPicker from "react-native-dropdown-picker";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";

const NewWordScreen = ({ navigation }) => {
  // const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   { label: "English", value: "english" },
  //   { label: "French", value: "french" },
  //   { label: "German", value: "german" },
  //   { label: "Hindi", value: "hindi" },
  // ]);

  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://speech-9cd70.web.app/word",
      { showTitle: false },
      { toolbarColor: "#000000" }
    );

    setResult(result);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light" backgroundColor="#5288ff" /> */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          {/* <Text style={styles.title}>French Language Course</Text> */}
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          {/* <Text style={styles.text}>Choose Your language : </Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          /> */}

          <Text style={styles.text}>Try new word:</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={_handlePressButtonAsync}
          >
            <Image source={require("../assets/button.png")} />
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default NewWordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#427dff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginTop: 55,
    height: 600,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#000000",
    marginTop: 20,
    marginBottom: 20,
  },
  textTitle: {
    color: "#000000",
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
  button: {
    // alignItems: "flex-end",
    marginTop: 10,
    alignItems: "center",
  },
  signIn: {
    width: 120,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  scrollView: {
    marginTop: 20,
  },
  image: {
    height: 150,
    width: 200,
    resizeMode: "contain",
  },
  rowItem: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  rowText: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "bold",
  },
});
