import { OPEN_SEARCH_DRAWER, OPEN_NAV_DRAWER, CLOSE_DRAWERS } from '../types/drawer-types';

export function openSearchDrawer() {
  return {
    type: OPEN_SEARCH_DRAWER
  };
}

export function openNavMenuDrawer() {
  return {
    type: OPEN_NAV_DRAWER
  };
}

export function closeDrawers() {
  return {
    type: CLOSE_DRAWERS
  };
}

