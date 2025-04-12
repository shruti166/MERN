import React from 'react';
import { Tabs } from 'antd';
import MovieList from './MovieList';

export default function Admin() {
  return (
    <div style={{margin: 5}}>
        <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: 'Movie LIst',
        key: '1',
        children: <MovieList />,
      },
      {
        label: 'Theater Table',
        key: '2',
        children: 'Tab 2',
      },
     
    ]}
  /></div>
  )
}
