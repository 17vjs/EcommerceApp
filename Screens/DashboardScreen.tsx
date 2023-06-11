import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { changeFavourites, initializeFavourites } from '../actions/favourites';

const DashboardScreen = ({ navigation, favourites, changeFavourites, initializeFavourites }) => {
  const [isLoading, setLoading] = useState(true);
  const [category, setCategory] = useState('skincare');
  const [page, setPage] = useState(0);
  const [isEndReached, setEndReached] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const reset = () => {
    setData(prev => []);
    setEndReached(prev => false);
    setLoading(prev => true);
    setPage(prev => 0);
  };
  const fetchLocalStorage = async () => {
    console.log("local storage read....");
    const string = await AsyncStorage.getItem("favourites")
    const data = JSON.parse(string)
    initializeFavourites(data)
  }
  const getProducts = async () => {
    try {
      const response = await fetch(
        `api/products?page=${page}&category=${category}`,
      );
      const json = await response.json();
      setData(prev => [...data, ...json]);
      if (json.length == 0) {
        setEndReached(prev => true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(prev => false);
    }
  };
  const loadMoreProducts = () => {
    if (isEndReached) {
      return;
    }
    setPage(page + 1);
  };
  useEffect(() => {
    reset();
  }, [category]);
  useEffect(() => {
    if (data.length === 0 && page === 0) {
      getProducts()
    }
  }, [data]);
  useEffect(() => {
    if (page !== 0) {
      getProducts();
    }
    if (data.length === 0 && page === 0) {
      getProducts()
    }
  }, [page]);
  useEffect(() => {
    fetchLocalStorage()
  }, []);
  return (
    <View style={{ backgroundColor: '#FFFFFF' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            flex: 1,
            margin: 10,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: category === 'makeup' ? '#F3FAAB' : 'white',
          }}
          onPress={() => {
            setCategory('makeup');
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="bottle-soda-classic"
              size={25}
            ></MaterialCommunityIcons>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                textAlign: 'center',
              }}>
              Makeup
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 50,
            margin: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: category === 'skincare' ? '#F3FAAB' : 'white',
          }}
          onPress={() => {
            setCategory('skincare');
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="spray-bottle"
              size={25}
            ></MaterialCommunityIcons>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'normal',
                textAlign: 'center',
              }}>
              Skin care
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }}>
        Weekly Top 4
      </Text>
      <Text style={{ padding: 10, fontSize: 10, fontWeight: 'bold' }}>
        Perfect-for-you based on your goals!
      </Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          numColumns={2}
          data={data}
          contentContainerStyle={{ paddingBottom: 500 }}
          onEndReached={loadMoreProducts}
          onEndReachedThreshold={0.8}
          ListFooterComponent={() => {
            return isEndReached ? (
              <Card>
                <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }}>
                  Say goodbye to guesswork
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ flex: 3 }}>
                    <Text
                      style={{ padding: 10, fontSize: 15, fontWeight: 'normal' }}>
                      Want even more Smudgtastic matches? Tap the button below
                      to discover!
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        margin: 10,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 100,
                        borderWidth: 1,
                        backgroundColor: 'black',
                      }}>
                      <Text
                        style={{
                          fontSize: 15,
                          color: 'white',
                          fontWeight: 'normal',
                          textAlign: 'center',
                        }}>
                        Discover
                      </Text>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}>
                    <MaterialCommunityIcons
                      name="face-woman-shimmer"
                      size={70}></MaterialCommunityIcons>
                  </View>
                </View>
              </Card>
            ) : (
              <ActivityIndicator />
            );
          }}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <View
              style={{ flex: 0.5 }}
            >
              <Card style={{ alignItems: "center" }}>
                <View
                  style={{
                    position: 'absolute', top: -10, zIndex: 1,
                    flexDirection: 'row',
                    flex: 1,
                    padding: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: 'black',
                    backgroundColor: 'black'
                  }}
                >
                  <MaterialCommunityIcons
                    name="lightning-bolt"
                    size={10}
                    color={"yellow"}
                  ></MaterialCommunityIcons>
                  <Text
                    style={{
                      fontSize: 10,
                      color: 'white',
                      fontWeight: 'normal',
                      textAlign: 'center',
                    }}>
                    Super match
                  </Text>
                </View>
                <Image
                  style={{
                    width: '100%',
                    aspectRatio: 1,
                    height: undefined,
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                  }}
                  source={item.image}
                />
                <View style={{ alignSelf: 'flex-start' }}>
                  <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }}>
                    {item.name}
                  </Text>
                  <Text style={{ padding: 10, fontSize: 15, fontWeight: 'normal' }}>
                    {item.description}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      height: 50,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: 'black',
                    }}>
                    <Text
                      onPress={() =>
                        navigation.navigate('ProductDetail', { id: item.id })
                      }
                      style={{
                        fontSize: 15,
                        fontWeight: 'normal',
                        textAlign: 'center',
                      }}>
                      View
                    </Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Icon onPress={() => {
                      changeFavourites(item.id)
                    }} name={!favourites.includes(item.id) ? "heart-outlined" : "heart"} color={'red'} size={25} />
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Icon name="dots-three-horizontal" size={25} />
                  </View>
                </View>
              </Card>
            </View>
          )}
        />
      )}
    </View>
  );
};
const mapStateToProps = state => ({
  ...state.favourites,
});
const mapDispatchToProps = dispatch => {
  return {
    changeFavourites: (id) => {
      dispatch(changeFavourites(id))
    },
    initializeFavourites: (favs) => {
      dispatch(initializeFavourites(favs))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
