import React from "react";
import { TouchableHighlight, Text, StyleSheet} from 'react-native'


function Button({title, onPress,}) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[styles.button, {backgroundColor: "#FD8653"}, ]}>
      <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    fontWeight: 'bold',
    margin: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: "#FD8653",
    borderRadius: 10,
    borderColor: 'white',
  },
  text: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'white',
  },

})
export default Button;
