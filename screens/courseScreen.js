import React from "react";
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
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Card } from "react-native-shadow-cards";

const courseScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <ActivityIndicator size="large" color="blue" animating={indicator} />
        <View style={styles.header}>
          <Text style={styles.title}>French Language Course</Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <View style={{ marginBottom: 20 }}>
            <Button
              //   onPress={() => navigation.navigate("NewWordScreen")}
              style={styles.button}
              title="Try New Word"
            />
          </View>
          <Card style={{ padding: 10 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WordScreen", {
                  paramKey: "1",
                  paramWord: "Papaya",
                  paramLang: "french",
                  paramImage: require("../assets/papaya.png"),
                })
              }
              style={styles.button}
            >
              <View style={styles.rowItem}>
                <View>
                  <Text style={styles.rowText}>Papaya</Text>
                </View>
                <View>
                  <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require("../assets/papaya.png")}
                    style={styles.image}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <TouchableOpacity
              // onPress={() => {
              //   navigation.navigate("myScreen");
              // }}
              onPress={() =>
                navigation.navigate("WordScreen", {
                  paramKey: "2",
                  paramWord: "Grapes",
                  paramLang: "french",
                  paramImage: require("../assets/grapes.png"),
                })
              }
              style={styles.button}
            >
              <View style={styles.rowItem}>
                <View>
                  <Text style={styles.rowText}>Grapes</Text>
                </View>
                <View>
                  <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require("../assets/grapes.png")}
                    style={styles.image}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WordScreen", {
                  paramKey: "3",
                  paramWord: "Apples",
                  paramLang: "french",
                  paramImage: require("../assets/apples.png"),
                })
              }
              style={styles.button}
            >
              <View style={styles.rowItem}>
                <View>
                  <Text style={styles.rowText}>Apples</Text>
                </View>
                <View>
                  <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require("../assets/apples.png")}
                    style={styles.image}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WordScreen", {
                  paramKey: "4",
                  paramWord: "Orange",
                  paramLang: "french",
                  paramImage: require("../assets/oranges.png"),
                })
              }
              style={styles.button}
            >
              <View style={styles.rowItem}>
                <View>
                  <Text style={styles.rowText}>Orange</Text>
                </View>
                <View>
                  <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require("../assets/oranges.png")}
                    style={styles.image}
                    resizeMode="stretch"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </Card>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default courseScreen;

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
