import 'react-native-gesture-handler';
import React from 'react';
import FindAddress from './src/components/FindAddress';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from './src/components/Favorites';
import History from './src/components/History';

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const FavoritesScreen = ({ navigation }) => {
  return (
    <Favorites navigation={navigation} />
  );
};

const HistoryScreen = ({ navigation }) => {
  return (
    <History navigation={navigation} />
  );
};

const MapScreen = ({ route }) => {
  const place = route.params.place;
  return (
    <FindAddress place={place} />
  );
};

const TabContainer = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          paddingBottom: 15
        }
      }}
    >
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator >
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Favorites" component={TabContainer} />
        <RootStack.Screen name="Map" component={MapScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
