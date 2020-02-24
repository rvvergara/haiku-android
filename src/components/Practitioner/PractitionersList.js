import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList } from 'react-native';
import { fetchPractitioners } from '../../store/thunks/practitioner';
import { listPractitioners } from '../../store/actions/practitioner';
import PractitionerCard from './PractitionerCard';

const PractitionersList = () => {
  const dispatch = useDispatch();
  const practitioners = useSelector((state) => state.practitioners);

  useEffect(() => {
    dispatch(fetchPractitioners());
    return () => dispatch(listPractitioners([]));
  }, []);
  return (
    <View>
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

export default PractitionersList;
