import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const WorldsList = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput required source="name" />
                <TextInput source="hotlink_image" />
                <TextInput required source="world_source" />
            </SimpleForm>
        </Edit>
    );
};

export default WorldsList;
