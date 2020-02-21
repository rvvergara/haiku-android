import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const MovableSpacer = ({
  position, top, bottom, children,
}) => (
  <View
    style={{
      position,
      top,
      bottom,
    }}
  >
    { children }
  </View>
);

MovableSpacer.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  position: PropTypes.string.isRequired,
  top: PropTypes.number,
  bottom: PropTypes.number,
};

MovableSpacer.defaultProps = {
  top: 0,
  bottom: 0,
};

export default MovableSpacer;
