import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getContactList, filterChange } from '../redux/actioncreators';
import RenderContact from './RenderContact';

const ContactList = () => {

  const dispatch = useDispatch();
  const contactData = useSelector(({ contacts, filter }) => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
  });

  useEffect(() => {
    dispatch(getContactList());
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} onChangeText={(e) => dispatch(filterChange(e))} placeholder='type to filter by name' />
      <Text style={styles.heading}>Contacts</Text>
      <FlatList
        data={contactData}
        keyExtractor={item => item.id}
        renderItem={RenderContact}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  heading: {
    fontWeight: '700',
    fontSize: 25,
    padding: 10
  },
  textInput: {
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10
  }
});

export default ContactList;