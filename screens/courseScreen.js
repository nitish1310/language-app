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
  ListItem,
} from "react-native";
import * as Animatable from "react-native-animatable";
// import axios from "axios";
import { Card } from "react-native-shadow-cards";

const CourseScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);
  console.log("Data:", data);
  var lang = route.params.paramLanguage;
  console.log("Lang:" + lang);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Course",

      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>{route.params.paramTitle}</Text>
        </View>
      ),
    });
  }, [navigation]);

  // const getDataUsingSimpleGetCall = () => {
  //   axios
  //     .get("https://47d969ca4ad5.ngrok.io/lang/")
  //     .then(function (response) {
  //       // handle success
  //       alert(
  //         "Well Done.... Word Translation: " + response.data.translationText
  //       );
  //       setData(response.data);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       alert(error.message);
  //     });
  // };

  const arrayData = [
    {
      id: "1",
      paramKey: "1",
      paramWord: "Papaya",
      paramLang: lang,
      paramImage: require("../assets/papaya.png"),
      paramSound: require("../assets/prompt1.mp3"),
    },
    {
      id: "2",
      paramKey: "2",
      paramWord: "Grapes",
      paramLang: lang,
      paramImage: require("../assets/grapes.png"),
      paramSound: require("../assets/prompt2.mp3"),
    },
    {
      id: "3",
      paramKey: "3",
      paramWord: "Apple",
      paramLang: lang,
      paramImage: require("../assets/apples.png"),
      paramSound: require("../assets/prompt3.mp3"),
    },
    {
      id: "4",
      paramKey: "4",
      paramWord: "Orange",
      paramLang: lang,
      paramImage: require("../assets/oranges.png"),
      paramSound: require("../assets/prompt4.mp3"),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}></View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <View style={{ marginBottom: 20 }}>
            <Button
              onPress={() => navigation.navigate("NewWord")}
              style={styles.button}
              title="Try New Word"
            />
          </View>

          {arrayData?.map((element) => {
            return (
              <View key={element.id} style={{ padding: 10 }}>
                <Card>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Word", {
                        paramKey: element.paramKey,
                        paramWord: element.paramWord,
                        paramLang: element.paramLang,
                        paramImage: element.paramImage,
                        paramSound: element.paramSound,
                      })
                    }
                    style={styles.button}
                  >
                    <View style={styles.rowItem}>
                      <View>
                        <Text style={styles.rowText}>{element.paramWord}</Text>
                      </View>
                      <View>
                        <Animatable.Image
                          animation="bounceIn"
                          duration="1500"
                          source={element.paramImage}
                          style={styles.image}
                          resizeMode="stretch"
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
            );
          })}
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#427dff",
  },
  header: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#000000",
    marginTop: 5,
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
    // alignItems: "center",
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
