import { OPEN_SEARCH_DRAWER, OPEN_NAV_DRAWER, CLOSE_DRAWERS } from '../types/drawer-types';

const init = {
  searchDrawer: false,
  navMenu: false
};

export default function drawerReducer(state = init, action) {
  switch(action.type) {
    case OPEN_SEARCH_DRAWER: {
      return { ...init, searchDrawer: true };
    }
    case OPEN_NAV_DRAWER: {
      return { ...init, navMenu: true };
    }
    case CLOSE_DRAWERS: {
      return { ...init };
    }

    default:
      return state;
  }
}
