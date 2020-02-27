import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchPractitioners } from '../../store/thunks/practitioner';
import { listPractitioners, setPractitioner } from '../../store/actions/practitioner';
import PractitionerDetailsCard from './PractitionerDetailsCard';
import { navigate } from '../../utils/navigationRef';


const styles = StyleSheet.create({
  listContainer: {
    margin: 10,
    borderRadius: 10,
    shadowColor: '#9aa7b2',
    shadowOffset: { width: 10, height: 2 },
    elevation: 5,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rightIcon: {
    fontSize: 30,
    color: '#9aa7b2',
  },
});

const PractitionersList = () => {
  const dispatch = useDispatch();
  const practitioners = useSelector((state) => state.practitioners);

  useEffect(() => {
    dispatch(fetchPractitioners());
    return () => dispatch(listPractitioners([]));
  }, []);

  const handleProfileClick = (profile) => {
    dispatch(setPractitioner(profile));
    navigate('Profile');
  };

  return (
    <View>
      {
        practitioners.map((practitioner) => (
          <ListItem
            key={practitioner.id}
            containerStyle={styles.listContainer}
            leftAvatar={{
              source: { uri: practitioner.image},
              size: 'large',
            }}
            title={(
              <PractitionerDetailsCard
                practitioner={practitioner}
              />
            )}
            rightIcon={(
              <Icon
                name="chevron-right-circle"
                style={styles.rightIcon}
              />
            )}
            onPress={() => handleProfileClick(practitioner)}
          />
        ))
      }
    </View>
  );
};

export default PractitionersList;
