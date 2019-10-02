import { openSearchDrawer, openNavMenuDrawer, closeDrawers } from './drawerActions';
import { OPEN_SEARCH_DRAWER, OPEN_NAV_DRAWER, CLOSE_DRAWERS } from '../types/drawer-types';

describe('drawer actions test', () => {
  it('open search drawer action', () => {
    expect(openSearchDrawer()).toEqual({
      type: OPEN_SEARCH_DRAWER
    });
  });
  it('open nav drawer action', () => {
    expect(openNavMenuDrawer()).toEqual({
      type: OPEN_NAV_DRAWER
    });
  });
  it('close drawers action', () => {
    expect(closeDrawers()).toEqual({
      type: CLOSE_DRAWERS
    });
  });
});
