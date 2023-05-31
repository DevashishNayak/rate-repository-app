import { Image, StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  subContainer: {
    padding: 16,
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  infoTab: {
    paddingLeft: 16,
    flexShrink: 1,
    alignItems: "flex-start",
  },
  statsSubContainer: {
    padding: 16,
    paddingTop: 0,
    flexDirection: "row",
  },
  statsTab: {
    flexGrow: 1,
    alignItems: "center",
  },
  text: {
    paddingTop: 4,
  },
  languageTab: {
    padding: 6,
    marginTop: 8,
    borderRadius: 4,
    backgroundColor: "#0366d6",
  },
  language: { color: "white" },
});

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  } else {
    return num;
  }
};

const StatsTab = ({ label, value }) => (
  <View style={styles.statsTab}>
    <Text fontWeight="bold">{formatNumber(value)}</Text>
    <Text color="textSecondary" style={styles.text}>
      {label}
    </Text>
  </View>
);

const RepositoryItem = ({ item }) => {
  return (
    <View key={item?.id} style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          source={{
            uri: item?.ownerAvatarUrl,
          }}
          style={styles.avatar}
        />
        <View style={styles.infoTab}>
          <Text fontSize="subheading" fontWeight="bold">
            {item?.fullName}
          </Text>
          <Text color="textSecondary" style={styles.text}>
            {item?.description}
          </Text>
          <View style={styles.languageTab}>
            <Text style={styles.language}>{item?.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsSubContainer}>
        <StatsTab label="Stars" value={item?.stargazersCount} />
        <StatsTab label="Forks" value={item?.forksCount} />
        <StatsTab label="Reviews" value={item?.reviewCount} />
        <StatsTab label="Rating" value={item?.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
