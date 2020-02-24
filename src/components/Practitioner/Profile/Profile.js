import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from '../../Common/Spacer';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10},
    elevation: 5,
    padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#20385a',
  },
  button: {
    backgroundColor: '#5073F1',
    width: 100,
  },
});

const Profile = ({ practitioner, navigation }) => {
  const fullName = `Dr. ${practitioner.firstName} ${practitioner.lastName}`;
  return (
    <Spacer>
      <View style={styles.container}>
        <View style={styles.card}>
          <Avatar
            source={{uri: practitioner.image }}
            size="xlarge"
            rounded
          />
          <Text style={styles.name}>{fullName}</Text>
          <Spacer />
          <Button
            title="Book"
            onPress={() => navigation.navigate('BookingSelection')}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    </Spacer>
  );
};

Profile.propTypes = {
  practitioner: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(Profile);
