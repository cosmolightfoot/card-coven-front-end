/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Search from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import { sidebarWidth } from '../../styling/styling-vars';

const useStyles = makeStyles(theme => ({
  sidebar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    position: 'fixed',
    left: '5px',
    width: `${sidebarWidth}px`,
    height: '500px',
    display: 'flex',
    paddingTop: '20px',
    paddingBottom: '20px',
    flexDirection: 'column'
  },
  item: {
    width: '100%',
    height: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px'
  },
  button: {
    padding: '10px',
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%'
  }
}));

const linkList = [
  {
    icon: <Search />,
    primary: 'Search',
    link: React.forwardRef((props, ref) => (
      <RouterLink innerRef={ref} to="/search" {...props} />
    ))
  },
  {
    icon: <AccountCircle />,
    primary: 'About',
    link: React.forwardRef((props, ref) => (
      <RouterLink innerRef={ref} to="/about" {...props} />
    ))
  }
];


function SideBarLink(props) {
  const classes = useStyles();
  const { icon, primary, link } = props;
  return (
    <Button className={classes.button} component={link}>
      <div className={classes.item}>
        {icon}
        <Typography variant="button">{primary}</Typography>
      </div>
    </Button>
  );
}

SideBarLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired
};

function SideBar() {
  const classes = useStyles();
  return (
    <nav className={classes.sidebar}>
      {linkList.map(link => {
        return (
          <SideBarLink
            key={link.primary}
            icon={link.icon}
            primary={link.primary}
            link={link.link}
          />
        );
      })}
    </nav>
  );  
}

export default SideBar;
