import React from 'react';
import PropTypes from 'prop-types';
import ExerciceImg from '../components/ExerciceImg';

/**
 * Primary UI component for user interaction
 */
export default function ExeImg({...props }) {
  return (
    <ExerciceImg {... props}/>
  );
};

ExeImg.propTypes = {

  /**
   * How large should the img be?
   */
  size: PropTypes.string,
  /**
   * ExeImg contents
   */
};

ExeImg.defaultProps = {
  size: "140px",
};
