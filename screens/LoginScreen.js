import React, { useLayoutEffect } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const signIn = () => {
    navigation.navigate("Home");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="#5288ff" style="light" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            // backgroundColor: color.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              //   color: colors.text,
            },
          ]}
        >
          Username
        </Text>
        <View style={styles.action}>
          <AntDesign
            name="user"
            //    color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                // color: colors.text,
              },
            ]}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {/* {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null} */}
        </View>
        {/* {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )} */}

        <Text
          style={[
            styles.text_footer,
            {
              //   color: colors.text,
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <AntDesign
            name="lock"
            //    color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#666666"
            // secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                // color: colors.text,
              },
            ]}
            autoCapitalize="none"
            // onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
          //    onPress={updateSecureTextEntry}
          >
            {/* {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )} */}
          </TouchableOpacity>
        </View>
        {/* {data.isValidPassword ? null : ( */}
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Password must be 8 characters long.
          </Text>
        </Animatable.View>
        {/* )} */}

        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
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
            onPress={() => signIn()}
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
              Sign In
            </Text>
            {/* </div> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
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
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 50,
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
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    // marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
});
