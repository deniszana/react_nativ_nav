import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';


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
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        } 
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}  />
      <Stack.Screen name="Detail" component={DetailScreen}  options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
    </Stack.Navigator>
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
