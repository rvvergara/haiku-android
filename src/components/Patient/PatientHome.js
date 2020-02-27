import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../Common/Spacer';
import { navigate } from '../../utils/navigationRef';
import { homeStyles } from '../../style-objects/homeStyles';

const styles = StyleSheet.create(homeStyles);

const PatientHome = () => (
  <View style={styles.container}>
    <Spacer>
      <Button
        title="Check My Bookings"
        titleStyle={styles.title}
        onPress={() => navigate('Bookings')}
        buttonStyle={styles.button}
      />
    </Spacer>
    <Spacer>
      <Button
        title="Search Practitioners"
        titleStyle={styles.title}
        onPress={() => navigate('Practitioners')}
        buttonStyle={styles.button}
      />
    </Spacer>
    <Spacer>
      <Button
        title="Search Clinics"
        titleStyle={styles.title}
        onPress={() => navigate('Clinics')}
        buttonStyle={styles.button}
      />
    </Spacer>
  </View>
);

export default PatientHome;
