import { useState, useEffect } from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

function HomeScreen({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Products</Text>

      <ScrollView>
        <View style={styles.cards}>
          {data?.map((dat) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Details", {
                    itemId: dat.id,
                  });
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: dat.image,
                  }}
                />
                <Text style={{ fontSize: 20 }}>
                  {dat.title.substring(0, 12)}...
                </Text>
                <Text style={{ color: "grey" }}>
                  {dat.description.substring(0, 40)}...
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  },

  image: {
    width: "100%",
    height: 100,
  },

  cards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  card: {
    width: "44%",
    margin: 10,
    padding: 10,
    backgroundColor: "lightgreen",
    borderRadius: 20,
  },
});

{
  /* <Button
  title="Go to Details"
  onPress={() => {
    navigation.navigate("Details", {
      itemId: 86,
      otherParam: "anything you want here",
    });
  }}
/>; */
}
