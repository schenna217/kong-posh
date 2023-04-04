import React from "react";
import { TouchableHighlight, Text, StyleSheet} from 'react-native'
import colors from "../config/colors";

function Button({title, onPress, }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.button, {backgroundColor: colors.primary}]}>
      <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 100,
    fontWeight: 'bold',
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 2,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  text: {
      fontWeight: 'bold',
      fontSize: 15,
  },

})
export default Button;
