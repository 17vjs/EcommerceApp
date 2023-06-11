/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import ProductDetailScreen from './Screens/ProductDetailScreen';
import { createServer } from "miragejs"
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyHeader from './components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

if (window.server) {
  server.shutdown()
}
window.server = createServer({
  seeds(server) {
    server.db.loadData({
      products: [
        { id: 1, category: "skincare", image: require("./img/skincare.jpg"), name: "Nykaa", description: "NYX Professional " },
        { id: 2, category: "skincare", image: require("./img/skincare.jpg"), name: "Lakme", description: "Lakme Professional " },
        { id: 3, category: "skincare", image: require("./img/skincare.jpg"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 4, category: "skincare", image: require("./img/skincare.jpg"), name: "Nykaa", description: "NYX Professional " },
        { id: 5, category: "skincare", image: require("./img/skincare.jpg"), name: "Lakme", description: "Lakme Professional " },
        { id: 6, category: "skincare", image: require("./img/skincare.jpg"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 7, category: "skincare", image: require("./img/skincare.jpg"), name: "Nykaa", description: "NYX Professional " },
        { id: 8, category: "skincare", image: require("./img/skincare.jpg"), name: "Lakme", description: "Lakme Professional " },
        { id: 9, category: "skincare", image: require("./img/skincare.jpg"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 10, category: "skincare", image: require("./img/skincare.jpg"), name: "Nykaa", description: "NYX Professional " },
        { id: 11, category: "skincare", image: require("./img/skincare.jpg"), name: "Lakme", description: "Lakme Professional " },
        { id: 12, category: "skincare", image: require("./img/skincare.jpg"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 13, category: "skincare", image: require("./img/skincare.jpg"), name: "Nykaa", description: "NYX Professional " },
        { id: 14, category: "skincare", image: require("./img/skincare.jpg"), name: "Lakme", description: "Lakme Professional " },
        { id: 15, category: "skincare", image: require("./img/skincare.jpg"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 16, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 17, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 18, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 19, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 20, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 21, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 22, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 23, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 24, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 25, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 26, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 27, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 28, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 29, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 30, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 31, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 32, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 33, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 34, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 35, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 36, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 37, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 38, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 39, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 40, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 41, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 42, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
        { id: 43, category: "makeup", image: require("./img/makeup.png"), name: "Nykaa", description: "NYX Professional " },
        { id: 44, category: "makeup", image: require("./img/makeup.png"), name: "Lakme", description: "Lakme Professional " },
        { id: 45, category: "makeup", image: require("./img/makeup.png"), name: "Maybelline", description: "Maybelline Professional" },
      ],
    })
  },
  routes() {
    this.get("/api/products", (schema, request) => {
      const page = request.queryParams.page;
      const category = request.queryParams.category;
      const pageSize = 10;
      return schema.db.products.filter(item => item.category == category).slice(page * pageSize, (page * pageSize) + pageSize);
    }),
      this.get("/api/products/:id", (schema, request) => {
        return schema.db.products.find(request.params.id);
      })
  },
})
const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: '#FFFFFF'
          },
        }} >
          <Stack.Screen options={{
            headerShown: false,
          }}
            name="Home"
            component={HomeScreen} />
          <Stack.Screen
            options={({ navigation, route }) => {
              return {
                header: () => <MyHeader isDashboard={false} navigation={navigation} route={route} />,
              };
            }}
            name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
