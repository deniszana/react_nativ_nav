import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import DetailsScreen from './screens/DetailsScreen';

function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        } 
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'home',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}  />
      </HomeStack.Navigator>
  );
}

function DetailStackScreen({navigation}) {
  return (
    <DetailStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        } 
      }}>
      <DetailStack.Screen name="Detail" component={DetailScreen}  options={{
        title:'detail',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </DetailStack.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title="goto detail"
        onPress={() => navigation.navigate("Detail")}
      />
    </View>
  );
}

function DetailScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>détail Screen</Text>
      <Button 
        title="goto detail again"
        onPress={() => navigation.push("Detail")}
      />
      <Button 
        title="goto home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button 
        title="goto back"
        onPress={() => navigation.goBack()}
      />  
      <Button 
        title="goto to fist screen"
        onPress={() => navigation.popToTop()}
      />    
    </View>
  );
}
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>

<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Detail" component={DetailStackScreen} />
      </Drawer.Navigator>      
    
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
