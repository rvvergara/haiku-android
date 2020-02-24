import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { View, StyleSheet } from 'react-native';
import Spacer from '../../Common/Spacer';
import MainBox from './MainBox';
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
      </View>
    </Spacer>
  );
};

export default Profile;
