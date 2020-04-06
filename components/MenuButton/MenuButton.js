import React from "react";
import {
  TouchableHighlight,
  Image,
  Text,
  View,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

const MenuButton = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.btnContainer}
      underlayColor="rgba(128, 128, 128, 0.1)"
    >
      <View style={styles.btnClickContain}>
        <Image source={props.source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: "row",
    padding: 5,
    marginTop: 5,
    marginBottom: 5
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  btnIcon: {
    height: 25,
    width: 25
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 2
  }
});
