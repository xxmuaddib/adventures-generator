import PropTypes from 'prop-types';
import { ObjectsPropTypes } from './ObjectGridPropTypes';
import { ImageSource } from './ElementPropTypes';

export const ScenePropTypes = PropTypes.shape({
  objects: ObjectsPropTypes,
  name: PropTypes.string.isRequired,
  bg: ImageSource,
});
