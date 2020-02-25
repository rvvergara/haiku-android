import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { View, StyleSheet } from 'react-native';
import Spacer from '../../Common/Spacer';
import MainBox from './MainBox';
import ListBox from '../../Common/Profile/ListBox';
import AboutBox from '../../Common/Profile/AboutBox';
import { setPractitioner } from '../../../store/actions/practitioner';
import { profileStyles } from '../../../style-objects/profileStyles';

const styles = StyleSheet.create(profileStyles);

const Profile = () => {
  const practitioner = useSelector((state) => state.displayedPractitioner);

  const dispatch = useDispatch();

  useEffect(() => () => dispatch(setPractitioner(null)), []);

  return (
    <Spacer>
      <View style={styles.container}>
        <MainBox practitioner={practitioner} />
        <ListBox
          list={JSON.parse(practitioner.specialties)}
          title="Specialties"
        />
        <AboutBox
          title="Biography"
          about={practitioner.biography}
        />
        <ListBox
          list={JSON.parse(practitioner.education)}
          title="Education"
        />
      </View>
    </Spacer>
  );
};

export default Profile;
