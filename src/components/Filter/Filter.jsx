import PropTypes from 'prop-types';
import { FilterField } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterField>
    <span>Find contacts by name</span>
    <input type="text" value={value} onChange={onChange} />
  </FilterField>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
