import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

const WordScreen = ({ navigation, route }) => {
  const [wordData, setWordData] = useState([]);

  let language = route.params.paramLang;
  const url =
    "https://43f6215f6512.ngrok.io/translate/" +
    language +
    "/" +
    route.params.paramWord;

  const getTranslatedWordData = () => {
    axios
      .get(`${url}`)
      .then((response) => {
        const allTranslatedWordData = response.data;

        setWordData(allTranslatedWordData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Word",
      headerStyle: { backgroundColor: "#427dff" },
      headerTitleStyle: { color: "white" },
      //   headerTintColor: "white",
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.titleText}>{route.params.paramWord} Word</Text>
        </View>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    // getTranslatedWordData();
  });

  const arrayData = [
    {
      id: "1",
      translatedWord: "Papaye",
      description:
        " un fruit tropical en forme de melon allongé, avec une chair orange comestible et de petites graines noires. the fast-growing tree which bears the papaya, native to warm regions of America. It is widely cultivated for its fruit, both for eating and for papain production.",
    },
    {
      id: "2",
      translatedWord: "Raisins",
      description:
        "une baie, généralement verte (classée comme blanche), violette, rouge ou noire, poussant en grappes sur une vigne, consommée comme fruit et utilisée dans la fabrication du vin.",
    },
    {
      id: "3",
      translatedWord: "Pomme",
      description:
        "le fruit rond d'un arbre de la famille des roses, qui a généralement une peau fine rouge ou verte et une chair croquante. De nombreuses variétés ont été développées comme desserts ou pour la cuisson des fruits ou pour la fabrication du cidre.",
    },
    {
      id: "4",
      translatedWord: "Orange",
      description:
        "Une orange est un type d'agrume que les gens mangent souvent. Les oranges sont une très bonne source de vitamine C.Le jus d'orange est une partie importante du petit-déjeuner de nombreuses personnes. L orange douce, qui est celle qui est le plus souvent consommée aujourd'hui, a d'abord poussé en Asie du Sud et de l'Est, mais pousse maintenant dans de nombreuses régions du monde. ",
    },
  ];

  const list = () => {
    return wordData?.map((element) => {
      //   if (element.word == route.params.paramWord) {
      return (
        <View key={element.id} style={{ margin: 10 }}>
          <Text style={styles.wordTitle}>{element.translation}</Text>
          {/* //             <Text style={styles.descriptionText}>{element.description}</Text> */}
          {/* <Text>{element.email}</Text> */}
        </View>
      );
      //   }
    });
  };

  const Desclist = () => {
    return arrayData?.map((element) => {
      if (element.id == route.params.paramKey) {
        return (
          <View key={element.id} style={{ margin: 10 }}>
            <Text style={styles.wordTitle}>{element.translatedWord}</Text>
            <Text style={styles.descriptionText}>{element.description}</Text>
          </View>
        );
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.titleText}>French Language Course</Text> */}
        <View>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={route.params.paramImage}
            style={styles.image}
            resizeMode="stretch"
          />
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>Image Conversion: </Text>
          <View>{Desclist()}</View>

          <View style={styles.rule} />
          <Text style={styles.textBottom}>Try New Word: </Text>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              // onPress={() => {
              //   loginHandle(data.username, data.password);
              // }}
              onPress={() => navigation.goBack()}
            >
              <LinearGradient
                colors={["#09c6f9", "#045de9"]}
                style={styles.button}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Go Back
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default WordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#427dff",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  titleText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  wordTitle: {
    color: "#000000",
    fontSize: 45,
    fontWeight: "bold",
  },
  descriptionText: {
    marginTop: 15,
    fontSize: 15,
  },
  text: {
    color: "grey",
    fontSize: 18,
    marginBottom: 10,
  },
  textBottom: {
    color: "grey",
    fontSize: 18,
    marginTop: 10,
    paddingBottom: 10,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 15,
  },
  image: {
    height: 200,
    width: 250,
    resizeMode: "contain",
  },
  button: {
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
  rule: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginTop: 15,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleFlat: {
    fontSize: 32,
  },
  scrollView: {
    marginTop: 0,
  },
});
