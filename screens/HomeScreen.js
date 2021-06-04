import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import * as Animatable from "react-native-animatable";

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: "#427dff" },
      headerTitleStyle: { color: "white", alignSelf: "center" },
      headerTintColor: "black",
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#5288ff" style="light" />

      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Language App</Text>
        </View>

        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <Card style={{ padding: 10 }}>
            <Text style={styles.textTitle}>English Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              onPress={() => alert("Page Under Maintenance....")}
              style={styles.button}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Learn More</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <Text style={styles.textTitle}>Hindi Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              onPress={() => alert("Page Under Maintenance....")}
              style={styles.button}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Learn More</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <Text style={styles.textTitle}>French Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("CourseScreen")}
              style={styles.button}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Learn More</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </Card>

          <Card style={{ padding: 10, marginTop: 12 }}>
            <Text style={styles.textTitle}>German Language Course</Text>
            <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing.
            </Text>
            <Text style={styles.text}>⭐ 4.5 . By Lorem Ipsum . All Level</Text>
            <TouchableOpacity
              onPress={() => alert("Page Under Maintenance....")}
              style={styles.button}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Learn More</Text>
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

const styles = StyleSheet.create({});
