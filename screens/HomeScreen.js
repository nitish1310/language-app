import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "react-native-shadow-cards";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#5288ff" style="light" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.titleText}>Welcome to Language App</Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Card style={{ padding: 10 }}>
            <Text style={styles.courseTextTitle}>English Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              onPress={() => alert("Page Under Maintenance....")}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Learn More</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <Text style={styles.courseTextTitle}>Hindi Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              // onPress={() =>
              //   navigation.navigate("Course", {
              //     paramKey: "2",
              //     paramTitle: "Hindi Language Course",
              //     paramLanguage: "hi",
              //   })
              // }
              onPress={() => alert("Page Under Maintenance....")}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Learn More</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <Text style={styles.courseTextTitle}>French Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Course", {
                  paramKey: "3",
                  paramTitle: "French Language Course",
                  paramLanguage: "fr",
                })
              }
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Learn More</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <Text style={styles.courseTextTitle}>German Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              onPress={() => alert("Page Under Maintenance....")}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Learn More</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </Card>
        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#427dff",
    alignItems: "center",
    justifyContent: "center",
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
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#000000",
    marginTop: 5,
  },
  courseTextTitle: {
    color: "#000000",
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
  },
  button: {
    width: 120,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  scrollView: {
    marginTop: 20,
  },
});
