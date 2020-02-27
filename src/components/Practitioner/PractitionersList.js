import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PractitionerDetailsCard from './PractitionerDetailsCard';
import { cardStyles } from '../../style-objects/practitionerCardStyles';
import usePractitionersList from '../../hooks/usePractitionersList';

const styles = StyleSheet.create(cardStyles);

const PractitionersList = () => {
  const { practitioners, handleProfileClick } = usePractitionersList();
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
            underlayColor="#fff"
          />
        ))
      }
    </View>
  );
};

export default PractitionersList;
