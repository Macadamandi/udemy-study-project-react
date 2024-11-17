import React from 'react';
import AppInfo from './app-info';
//import { actions } from '@storybook/addon-actions';

export default {
  title: 'AppInfo Component',
  component: AppInfo,
};

export const AppInfoBaseExample1 = () => {
  return <AppInfo employeers={60} award={10} />
}


export const AppInfoBaseExample2 = () => {
  return <AppInfo employeers={20} award={1} />
}
