import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import {
  Text, Image,
} from 'react-native-elements';
import { NavigationEvents, withNavigation } from 'react-navigation';
import { fetchPractitioners } from '../../store/thunks/practitioner';
import { listPractitioners } from '../../store/actions/practitioner';
import PractitionerCard from './PractitionerCard';

const styles = StyleSheet.create({
});

const PractitionersList = () => {
  const dispatch = useDispatch();
  const practitioners = useSelector((state) => state.practitioners);

  useEffect(() => {
    dispatch(fetchPractitioners());
    return () => dispatch(listPractitioners([]));
  }, []);
  return (
    <View>
      <NavigationEvents
        onWillBlur={() => listPractitioners([])}
      />
      <FlatList
        data={practitioners}
        keyExtractor={(practitioner) => practitioner.id}
        renderItem={({item}) => (
          <PractitionerCard
            practitioner={item}
          />
        )}
      />
    </View>
  );
};

export default withNavigation(PractitionersList);
