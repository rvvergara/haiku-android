import React from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, FlatList,
} from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import DateSelector from '../../Common/DateSelector';
import Spacer from '../../Common/Spacer';
import useOpenSlot from '../../../hooks/useOpenSlot';
import { slotSelectionStyles } from '../../../style-objects/bookingSlotsStyles';

const styles = StyleSheet.create(slotSelectionStyles);

const SlotSelection = ({ navigation }) => {
  const {
    shownSlots,
    mode,
    show,
    handleSlotPress,
    onDateChange,
    showDatePicker,
    dateShown,
  } = useOpenSlot(navigation);

  return (
    <>
      <View style={styles.pickerContainer}>
        <DateSelector
          mode={mode}
          show={show}
          onDateChange={onDateChange}
          showDatePicker={showDatePicker}
          date={dateShown}
          label="Select Date"
        />
      </View>
      <FlatList
        data={shownSlots}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Spacer>
            <Button
              title={item.time}
              onPress={() => handleSlotPress(item)}
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
            />
          </Spacer>
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

SlotSelection.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(SlotSelection);
