import * as Contacts from 'expo-contacts';

const getContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();
  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers]
    });

    return data;
  };
};

export const filterChange = filter => async dispatch => {
  dispatch({
    type: 'SET_FILTER',
    data: filter
  });
};

export const getContactList = () => async dispatch => {
  const contacts = await getContacts();
  dispatch({
    type: 'GET_CONTACTS',
    data: contacts
  })
}