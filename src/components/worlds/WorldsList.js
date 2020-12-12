import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
} from 'react-admin';

const WorldsList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="hotlink_image" />
                <TextField source="world_source" />
                <EditButton label="Editar" basePath="/worlds" />
                <DeleteButton label="Deletar" basePath="/worlds" />
            </Datagrid>
        </List>
    );
};

export default WorldsList;
