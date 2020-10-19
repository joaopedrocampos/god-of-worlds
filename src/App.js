import * as React from 'react';
import { render } from 'react-dom';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

// import { WorldList, WorldEdit, WorldCreate, WorldIcon } Zfrom './worlds';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () =>
    render(
        <Admin dataProvider={dataProvider}>
            {/* <Resource
                name="world"
                list={WorldList}
                edit={WorldEdit}
                create={WorldCreate}
                icon={WorldIcon}
            /> */}
            <Resource name="users" list={ListGuesser} />
        </Admin>,
        document.getElementById('root')
    );

export default App;
