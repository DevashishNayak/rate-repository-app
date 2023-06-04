import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 16,
    paddingBottom: 16,
    paddingRight: 16,
    backgroundColor: theme.colors.background,
    flexDirection: "row",
  },
  pressable: {
    paddingLeft: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable style={styles.pressable}>
          <Link to="/">
            <Text style={styles.text}>Repositories</Text>
          </Link>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Link to="/signin">
            <Text style={styles.text}>Sign in</Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
