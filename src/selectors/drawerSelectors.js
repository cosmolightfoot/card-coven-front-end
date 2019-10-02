export const getDrawerState = state => state.drawers;
export const getSearchDrawerState = state => getDrawerState(state).searchDrawer;
export const getNavMenuDrawerState = state => getDrawerState(state).navMenu;
