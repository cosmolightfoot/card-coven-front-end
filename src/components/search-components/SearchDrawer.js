import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { connect } from 'react-redux';
import { getSearchDrawerState } from '../../selectors/drawerSelectors';
import { openSearchDrawer, closeDrawers } from '../../actions/drawerActions';
import { headerHeight, sidebarWidth } from '../../styling/styling-vars';
import { SearchTabs } from './index';

const useStyles = makeStyles({
  drawerPaper: {
    position: 'fixed',
    top: `${headerHeight}px`,
    zIndex: 1000,
    height: '500px',  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});

function SearchDrawer(props) {
  const { searchDrawer, openSearch, closeSearch } = props;
  const classes = useStyles();

  useEffect(() => {
    openSearch();
  }, []);

  return (
    <Drawer
      open={searchDrawer}
      onClose={closeSearch}
      classes={{ paper: classes.drawerPaper }}
      className={classes.drawer}
      anchor="top"
      variant="temporary"
    >
      <SearchTabs />
    </Drawer>
  );
}

const mapStateToProps = state => ({
  searchDrawer: getSearchDrawerState(state)
});

const mapDispatchToProps = dispatch => ({
  openSearch() {
    dispatch(openSearchDrawer());
  },
  closeSearch() {
    dispatch(closeDrawers());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchDrawer);
