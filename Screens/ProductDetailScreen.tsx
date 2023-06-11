import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator, Image, FlatList, View, ImageBackground } from 'react-native';
import Card from '../components/Card';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ProductDetailScreen = ({ navigation, route }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Product>(null);
  const getProduct = async () => {
    try {
      const response = await fetch(`api/products/${route.params.id}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <FlatList
            horizontal={true}
            data={[1, 2, 3]}
            renderItem={item => {
              return (
                <Card>
                  <Image
                    style={{
                      borderRadius: 18,
                      width: 300,
                      height: 400,
                    }}
                    source={data.image}
                  />
                </Card>
              );
            }}
            keyExtractor={item => item}
            style={{ width: '100%' }}
          />
          <Text style={{ padding: 10, fontSize: 14, fontWeight: 'normal' }}>
            {data.name}
          </Text>
          <Text style={{ padding: 10, fontSize: 16, fontWeight: 'bold' }}>
            {data.description}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                margin: 10,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'black',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  textAlign: 'center',
                }}>
                View brand
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 50,
                margin: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'normal',
                  textAlign: 'center',
                }}>
                Add to kit
              </Text>
            </View>
          </View>
          <Text style={{ padding: 10, fontSize: 24, fontWeight: 'bold' }}>
            Key Benefits
          </Text>
          <Card>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 50,
                }}>
                <Text>17</Text>
              </View>
              <View style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>users 3 this</Text>
                <Text>and we think you will too</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 50,
                }}>
                <Text>17</Text>
              </View>
              <View style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>experts recommend this</Text>
                <Text>for your face profile</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 50,
                }}>
                <Icon name="water"></Icon>
              </View>
              <View style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>waterproof</Text>
                <Text>splash away, makeup stays safe</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 50,
                }}>
                <MaterialCommunityIcons name="spray-bottle"></MaterialCommunityIcons>
              </View>
              <View style={{ flex: 1, padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>moisturising</Text>
                <Text>bye-bye dryness!</Text>
              </View>
            </View>
          </Card>
          <Text style={{ padding: 10, fontSize: 24, fontWeight: 'bold' }}>
            Expert Reviews
          </Text>
          <FlatList
            horizontal={true}
            data={[1, 2, 3]}
            renderItem={item => {
              return (
                <Card>
                  <ImageBackground
                    resizeMode='cover'
                    imageStyle={{ borderRadius: 18 }}
                    style={{
                      width: 300,
                      height: 400,
                    }}
                    source={require('../img/unnamed.png')}
                  >
                    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <View style={{ flexDirection: "row", alignItems: 'center', padding: 10 }}>
                        <Icon name="controller-play" size={30} color={'white'} />
                        <Text style={{ color: 'white', padding: 10 }}>30s</Text>
                      </View>
                      <Text style={{ color: 'white', padding: 10 }}>Aliquam dignissim a tellus eu egestas.</Text>

                    </View>
                  </ImageBackground>
                </Card>
              );
            }}
            keyExtractor={item => item}
            style={{ width: '100%' }}
          />
          <Card>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: 10,
              }}>
              <MaterialCommunityIcons
                size={40}
                name="star-outline"></MaterialCommunityIcons>
              <MaterialCommunityIcons
                size={40}
                name="star-outline"></MaterialCommunityIcons>
              <MaterialCommunityIcons
                size={40}
                name="star-outline"></MaterialCommunityIcons>
              <MaterialCommunityIcons
                size={40}
                name="star-outline"></MaterialCommunityIcons>
              <MaterialCommunityIcons
                size={40}
                name="star-outline"></MaterialCommunityIcons>
            </View>
            <View
              style={{
                flex: 1,
                height: 50,
                margin: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: 'black',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'normal',
                  textAlign: 'center',
                }}>
                Rate this product
              </Text>
            </View>
          </Card>
          <Text style={{ padding: 10, fontSize: 24, fontWeight: 'bold' }}>
            You may also like
          </Text>
          <FlatList
            horizontal={true}
            data={[1, 2, 3]}
            renderItem={item => {
              return (
                <Card style={{ width: 250, padding: 10 }}>
                  <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ flex: 1 }}>
                      <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }}>
                        Nykaa
                      </Text>
                      <Text
                        style={{ padding: 10, fontSize: 15, fontWeight: 'normal' }}>
                        Bath & Body Works Pineapple Coconut...
                      </Text>
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
                            style={{
                              fontSize: 15,
                              fontWeight: 'normal',
                              textAlign: 'center',
                            }}>
                            View
                          </Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                          <Icon name="heart-outlined" size={25} />
                        </View>
                      </View>
                    </View>
                    <View >
                      <Image
                        style={{
                          borderRadius: 10,
                          height: 90,
                          width: 60
                        }}
                        source={require('../img/unnamed.png')}
                      />
                    </View>
                  </View>
                </Card>
              );
            }}
            keyExtractor={item => item}
          />
        </ScrollView>
      )}
    </View>
  );
};
export default ProductDetailScreen;
