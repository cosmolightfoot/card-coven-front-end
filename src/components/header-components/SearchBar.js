import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
    borderRadius: '5px',
    backgroundColor: theme.palette.grey.main
  },
  textField: {
    backgroundColor: theme.palette.grey.main,
    borderRadius: '5px',
    width: '90%'
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
        <TextField
          id="header-search"
          label="Search Cards"
          className={classes.textField}
          value={text}
          onChange={handleChange}
          variant="filled"
          color="secondary"
        />
        <Search className={classes.searchIcon} />
      </form>
    </Box>
  );
}

export default SearchBar;
