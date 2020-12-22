import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const WorldsCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" required />
                <TextInput source="hotlink_image" />
                <TextInput source="world_source" required />
            </SimpleForm>
        </Create>
    );
};

export default WorldsCreate;
