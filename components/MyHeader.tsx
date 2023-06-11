import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from 'react-redux';
import { changeFavourites } from '../actions/favourites';
const MyHeader=({isDashboard,navigation,route,favourites,changeFavourites}) =>{
  return <>{ !isDashboard? (
    <View style={{flexDirection: 'row', padding:10,backgroundColor:"#FFFFFF"}}>
      <View style={{justifyContent: 'center'}}>
     <Icon onPress={navigation.goBack} name="chevron-left" size={25}  />
      </View>
      <View style={{flex: 1}}>
      </View>
      <View style={{justifyContent: 'center', padding: 15}}>
      <Icon onPress={ () => {
                      changeFavourites(route.params.id)
                    }} name={!favourites.includes(route.params.id) ? "heart-outlined" : "heart"} color={'red'} size={25} />

      </View>
      <View style={{justifyContent: 'center', padding: 15}}>
        <Icon name="share" size={25} />
      </View>
    </View>
  ):(
    <View style={{flexDirection: 'row', padding:10, backgroundColor:"#FFFFFF"}}>
      <View style={{justifyContent: 'center'}}>
      <Text style={{ fontSize: 10, fontWeight: 'bold'}}>
      Hi Vijay
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                beauty starts here
                </Text>
      </View>
      <View style={{flex: 1}}>
      </View>
      <View style={{justifyContent: 'center', padding: 15}}>
        <Icon name="menu" size={25} />
      </View>
    </View>
  )}</>;
}
const mapStateToProps = state => ({
  ...state.favourites,
});
const mapDispatchToProps = dispatch => {
  return {
    changeFavourites: (id) => {
      dispatch(changeFavourites(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyHeader);
