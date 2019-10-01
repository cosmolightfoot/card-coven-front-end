import React from 'react';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { headerHeight } from '../../styling/styling-vars';

import Search from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    padding: '0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    height: '50px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.dark
  },
  textField: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '5px',
    height: '90%',
    width: '90%',
    padding: '5px',
    fontSize: '1.2rem'
  },
  searchIcon: {
    margin: '2.5%'
  }
}));

function SearchBar() {
  const classes = useStyles();
  const [text, setText] = React.useState();
  const handleChange = event => {
    setText(event.target.value);
  };
  return (
    <Box className={classes.container}>
      <form className={classes.form}>
        {/* <TextField
          id="header-search"
          label="Search Cards"
          className={classes.textField}
          value={text}
          onChange={handleChange}
          variant="filled"
          color="secondary"
          margin="normal"
          layout="dense"
          disableUnderline
          InputLabelProps={{ shrink: true }}
        /> */}
        <Input 
          onChange={handleChange}
          value={text}
          className={classes.textField}
          disableUnderline
        />
        <Search className={classes.searchIcon} />
      </form>
    </Box>
  );
}

export default SearchBar;
