import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Text, Button, Avatar,
} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from '../Common/Spacer';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const PractitionerCard = ({ practitioner, navigation}) => {
  const fullName = `Dr. ${practitioner.firstName} ${practitioner.lastName}`;

  const specialties = JSON.parse(practitioner.specialties).join(', ');
  return (
    <Spacer>
      <View style={styles.card}>
        <Avatar
          source={{uri: practitioner.image }}
          size="medium"
          rounded
        />
        <View style={styles.info}>
          <Text style={styles.name}>
            { fullName }
          </Text>
          <Text>
            { specialties }
          </Text>
        </View>
        <View style={styles.links}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { practitioner })}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <Button
            title="Book"
          />
        </View>
      </View>
    </Spacer>
  );
};

PractitionerCard.propTypes = {
  practitioner: PropTypes.instanceOf(Object).isRequired,
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(PractitionerCard);
