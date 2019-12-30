import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { getSetNames } from '../../../selectors/assortedDataSelectors';
import { getSelectedSets } from '../../../selectors/searchFormSelectors';
import { updateSelectedSets } from '../../../actions/searchFormActions';

const defaultStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SetSelect({selectedSets, handleChange, setNames}) {
  const classes = defaultStyles();
  // const handleChange = event => {
  //   setPersonName(event.target.value);
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selectedSets}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {setNames.map(setName => (
            <MenuItem key={setName} value={setName}>
              <Checkbox checked={selectedSets.indexOf(setName) > -1} />
              <ListItemText primary={setName} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = state => ({
  setNames: getSetNames(state),
  selectedSets: getSelectedSets(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSelectedSets(target.value));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SetSelect);

