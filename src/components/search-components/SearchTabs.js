import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SimpleSearch, AdvancedSearch } from './';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tab: {
    width: '100%'
  },
  simpleTab: {
    width: '100%',
  },
  advancedTab: {

  }
}));

function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Simple" {...a11yProps(0)} className={classes.tab} />
        <Tab label="Advanced" {...a11yProps(1)} className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction} className={classes.simpleTab}>
        <SimpleSearch />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction} className={classes.advancedTab}>
        <AdvancedSearch />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
    </div>
  );
}

export default FullWidthTabs;
