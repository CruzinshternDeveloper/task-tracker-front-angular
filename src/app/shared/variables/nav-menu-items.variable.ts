import { IMenuItem } from '../interfaces/menu-item.interface';

export const NAV_MENU_ITEMS: IMenuItem[] = [
  { icon: 'add', label: 'Create new task', tooltip: 'Create new task', route: 'create' },
  { icon: 'list_alt', label: 'List', tooltip: 'List', route: 'list' },
  { icon: 'donut_large', label: 'Statistics', tooltip: 'Statistics', route: 'statistics' },
  { icon: 'settings', label: 'Settings', tooltip: 'Settings', route: 'settings' },
  { icon: 'perm_identity', label: 'Profile', tooltip: 'Profile', route: 'profile' }
];
