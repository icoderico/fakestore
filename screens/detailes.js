import { useEffect, useState } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: data?.image }} />
        <Text style={styles.category}>| {data?.category} |</Text>
        <Text style={styles.heading}>{data?.title}</Text>
        <Text style={styles.description}>{data?.description}</Text>
        <Text style={styles.price}>${data?.price}</Text>
        {/* <Text>itemId: {JSON.stringify(itemId)}</Text> */}
        {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}

        <View style={styles.fixToText}>
          <View style={styles.button}>
            <Button
              title="Buy"
              onPress={() => Alert.alert("Succesfuly added ✅")}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Products"
              color={"green"}
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },

  heading: {
    fontWeight: "800",
    fontSize: 25,
    padding: 10,
    color: "lightblue",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexShrink: 1,
  },

  button: {
    backgroundColor: "red",
    width: "49%",
  },

  description: {
    fontSize: 18,
    padding: 10,
    color: "grey",
  },
  category: {
    fontSize: 18,
    padding: 10,
    color: "grey",
  },
  price: {
    color: "green",
    fontSize: 30,
    padding: 10,
  },

  buttonGroup: {
    backgroundColor: "red",
    width: "50%",
  },
});

export default DetailsScreen;
