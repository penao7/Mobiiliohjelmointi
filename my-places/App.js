import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import FindAddress from './src/components/FindAddress';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Button, FlatList, Dimensions, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import TextInput from './src/components/TextInput';
import useField from './src/hooks/useField';
import firebase from './src/Firestore';
import { ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const screenWidth = Math.round(Dimensions.get('window').width);
const db = firebase.firestore();

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: 'center',
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth - 60
  }
});

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator();

const handleNavigate = async (item, navigate) => {
  try {
    await db.collection('history').add({
      address: item.data.address
    });
    navigate('Map', { place: item.data.address });
  } catch (err) {
    console.log(err);
  }
};

const RenderAddress = ({ item, navigate, handleDelete }) => {

  return (
    <TouchableOpacity
      onPress={() => handleNavigate(item, navigate)}
      onLongPress={() => handleDelete(item.id)}
    >
      <ListItem bottomDivider>
        <View style={styles.listItemContainer}>
          <View style={{ flexGrow: 2 }}>
            <ListItem.Title>{item.data.address}</ListItem.Title>
          </View>
          <ListItem.Subtitle style={{ paddingRight: 10 }}>show on map</ListItem.Subtitle>
          <ListItem.Subtitle>
            <Icon name='angle-right' type='font-awesome' size={20} aria-hidden='true' />
          </ListItem.Subtitle>
        </View>
      </ListItem>
    </TouchableOpacity>
  );
};

const SearchScreen = ({ navigation }) => {

  const [savedAdresses, setSavedAddresses] = useState([]);
  const { navigate } = navigation;
  const place = useField();

  const getAdresses = async () => {
    try {
      const { docs } = await db.collection('addresses').get();
      setSavedAddresses(docs.map(doc => { return { data: doc.data(), id: doc.id }; }));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAddress = async (id) => {
    try {
      await db.collection('addresses').doc(id).delete();
      getAdresses();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Delete",
      "Are you sure you want to delete this address?",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('cancel pressed'),
          style: 'cancel'
        },
        { text: 'Delete', onPress: () => deleteAddress(id) }
      ],
      { cancelable: false }
    );
  };

  const addAddress = async () => {
    await db.collection('addresses').add({
      address: place.value
    });
    return getAdresses();
  };

  useEffect(() => {
    getAdresses();
  }, []);

  return (
    <View style={styles.screenStyle}>
      <TextInput {...place} placeholder='find' />
      <View style={{ padding: 10 }}>
        <Button title='Save' onPress={() => addAddress()} />
      </View>
      <FlatList
        data={savedAdresses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderAddress item={item} navigate={navigate} place={place} handleDelete={handleDelete} />
        )}
      />
    </View>
  );
};

const renderHistoryItem = ({ item }) => {
  console.log(item);
  return (
    <ListItem bottomDivider>
      <View style={styles.listItemContainer}>
        <ListItem.Title>{item.address}</ListItem.Title>
      </View>
    </ListItem>
  );
};

const HistoryScreen = ({ navigation }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);


  const getHistory = async () => {
    try {
      const { docs } = await db.collection('history').get();
      setHistory(docs.map(doc => doc.data()));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = navigation.addListener('focus', () => {
      getHistory();
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='black' />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={history}
        renderItem={renderHistoryItem}
        keyExtractor={(item, i) => i.toString()}
      />
    </View>
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
        component={SearchScreen} />
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
