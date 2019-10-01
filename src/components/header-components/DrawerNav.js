/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Search from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  nav: {
    width: '300px'
  },
  listItem: {}
});

const navItems = [
  {
    icon: <Search />,
    primary: 'Search Cards',
    to: '/search'
  },
  {
    icon: <AccountCircle />,
    primary: 'About',
    to: '/about'
  }
];

function ListItemLink({ icon, primary, to }) {
  const classes = useStyles();
  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} {...itemProps} innerRef={ref} />
      )),
    [to]
  );

  ListItemLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  };

  return (
    <ListItem button component={renderLink}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
}



function DrawerNav() {
  const classes = useStyles();
  return (
    <nav className={classes.nav}>
      <List>
        { navItems.map(item => {
          return <ListItemLink key={item.primary} icon={item.icon} primary={item.primary} to={item.to} />
        })}
      </List>
    </nav>
  );
}

export default DrawerNav;
