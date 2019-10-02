import drawerReducer from './drawerReducer';
import { openSearchDrawer, openNavMenuDrawer, closeDrawers } from '../actions/drawerActions';

describe('drawer reducer tests', () => {
  it('open search drawer reducer', () => {
    expect(
      drawerReducer({ searchDrawer: false, navMenu: false }, openSearchDrawer())
    ).toEqual({ searchDrawer: true, navMenu: false });
  });
  it('open search drawer reducer, other opendrawer closes when search drawer opens', () => {
    expect(
      drawerReducer({ searchDrawer: false, navMenu: false }, openSearchDrawer())
    ).toEqual({ searchDrawer: true, navMenu: false });
  });
  it('open nav menu drawer reducer', () => {
    expect(
      drawerReducer({ searchDrawer: false, navMenu: false }, openNavMenuDrawer())
    ).toEqual({ searchDrawer: false, navMenu: true });
  });
  it('close drawers reducer', () => {
    expect(
      drawerReducer({ searchDrawer: true, navMenu: false }, closeDrawers())
    ).toEqual({ searchDrawer: false, navMenu: false });
  });
});
