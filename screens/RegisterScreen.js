import React, { useLayoutEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Feather } from "@expo/vector-icons";

const RegisterScreen = ({ navigation }) => {
  const signUp = () => {
    navigation.navigate("Home");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5288ff" style="light" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <AntDesign name="user" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              //   onChangeText={(val) => textInputChange(val)}
            />
            {/* {data.check_textInputChange ? ( */}
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
            {/* ) : null} */}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <AntDesign name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={true}
              //   secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              type="password"
              //   onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
            //  onPress={updateSecureTextEntry}
            >
              {/* {data.secureTextEntry ? ( */}
              {/* <Feather name="eye-off" color="grey" size={20} /> */}
              {/* ) : ( */}
              <AntDesign name="eye" color="grey" size={20} />
              {/* )} */}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <AntDesign name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={true}
              //   secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              //   onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
            //  onPress={updateConfirmSecureTextEntry}
            >
              {/* {data.secureTextEntry ? ( */}
              <Feather name="eye-off" color="grey" size={20} />
              {/* ) : ( */}
              {/* <Feather name="eye" color="grey" size={20} /> */}
              {/* )} */}
            </TouchableOpacity>
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our{" "}
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              Terms of service{" "}
            </Text>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: "#045de9",
                  backgroundColor: "#5288ff",
                  borderWidth: 1,
                  marginTop: 15,
                  color: "#ffffff",
                },
              ]}
              // onPress={() => {
              //   loginHandle(data.username, data.password);
              // }}
              onPress={() => signUp()}
            >
              {/* <div
            //   colors={["#09c6f9", "#045de9"]}
            //   style={styles.signIn}
            > */}
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Sign Up
              </Text>
              {/* </div> */}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={[
                styles.signIn,
                {
                  borderColor: "#045de9",

                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#045de9",
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#427dff",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
