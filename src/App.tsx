import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import WorldsEdit from './components/worlds/WorldsEdit';
import WorldsCreate from './components/worlds/WorldsCreate';
import WorldsList from './components/worlds/WorldsList';

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="worlds"
                list={WorldsList}
                edit={WorldsEdit}
                create={WorldsCreate}
            />
        </Admin>
    );
};

export default App;
