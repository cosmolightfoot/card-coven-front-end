import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mockEllipse: {
    width: '60px',
    height: '60px',
    borderRadius: '100%',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mockText: {
    color: '#000000'
  }

});

function UserAvatar() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.mockEllipse}>
        <Typography className={classes.mockText} variant="h5">CP</Typography>
      </div>
    </section>
  );
}

export default UserAvatar;
