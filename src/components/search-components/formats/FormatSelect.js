import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { getGameFormats } from '../../../selectors/assortedDataSelectors';
import { getSelectedFormats } from '../../../selectors/searchFormSelectors';
import { updateSelectedFormats } from '../../../actions/searchFormActions';

const defaultStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    width: '100%',
    maxWidth: 500
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      maxWidth: 400
    },
  },
};

function FormatSelect({ selectedFormats, handleChange, formatNames }) {
  const classes = defaultStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="format-select">Filter Cards By Format</InputLabel>
        <Select
          labelId="format-select"
          id="demo-mutiple-checkbox"
          multiple
          value={selectedFormats}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {formatNames.map(formatName => (
            <MenuItem key={formatName} value={formatName}>
              <Checkbox checked={selectedFormats.indexOf(formatName) > -1} />
              <ListItemText primary={formatName.replace(/^./, formatName[0].toUpperCase())} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

FormatSelect.propTypes = {
  selectedFormats: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  formatNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  formatNames: getGameFormats(state),
  selectedFormats: getSelectedFormats(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSelectedFormats(target.value));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(FormatSelect);
