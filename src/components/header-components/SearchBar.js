import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {  
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  textField: {
    backgroundColor: theme.palette.grey.main,
    borderRadius: '5px'
  }
}));

function SearchBar() {
  const classes = useStyles();
  const [text, setText] = React.useState();
  const handleChange = event => {
    setText(event.target.value);
  };
  return (
    <form className={classes.container}>
      <TextField
        id="header-search"
        label="Search Cards"
        className={classes.textField}
        value={text}
        onChange={handleChange}
        variant="filled"
        color="secondary"
      />
    </form>
  );
}

export default SearchBar;
