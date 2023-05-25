import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FindInput, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeInput = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <FindInput
        type="text"
        name="filter"
        onChange={onChangeInput}
      />
    </Label>
  );
};

Label.propTypes = {
  filter: PropTypes.string,
};
