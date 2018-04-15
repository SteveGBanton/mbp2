import { Session } from 'meteor/session';

export function snackBarClose() {
  Session.set('snackBar', { active: false, message: '' });
}

export function snackBarOpen(message) {
  Session.set('snackBar', { active: true, message });
}

export function drawerDashboardClose() {
  Session.set('isDashboardDrawerOpen', false);
}

export function drawerDashboardOpen() {
  Session.set('isDashboardDrawerOpen', true);
}


export function pro() {
  return null;
}
