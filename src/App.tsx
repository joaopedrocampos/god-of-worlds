import * as React from 'react';
import { Admin, Resource, ListGuesser, DataProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { WorldList, WorldEdit, WorldCreate, WorldIcon } from './worlds';

const dataProvider: DataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
    return <Admin dataProvider={dataProvider}>
        <Resource
            name="world"
            list={WorldList}
            edit={WorldEdit}
            create={WorldCreate}
            icon={WorldIcon}
        />
        <Resource name="users" list={ListGuesser} />
    </Admin>
};

export default App;
