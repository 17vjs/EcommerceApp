import React from 'react';
import {View, StyleSheet} from 'react-native';
const Card = props => {
  return  <View style={{...styles.card, ...props.style}} >{props.children}</View>;
};
const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor:"black",
    borderWidth:2,
  },
});
export default Card;
