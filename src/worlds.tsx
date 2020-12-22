import * as React from 'react';
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    TextInput,
    DateInput,
} from 'react-admin';
import PublicIcon from '@material-ui/icons/Public';

export const WorldIcon = PublicIcon;

export const WorldList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="created_at" />
            <TextField source="icon_url" />
            <TextField source="world_source" />
            <TextField source="views" />
            <EditButton basePath="/worlds" />
        </Datagrid>
    </List>
);

const WorldName = (record: { [key: string]: any }) => {
    return <span>World {record ? `"${record.name}"` : ''}</span>;
};

export const WorldEdit = (props: any) => (
    <Edit title={WorldName} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="icon_url" />
            <TextInput source="world_source" />
            <DateInput label="Creation date" source="created_at" />
            <TextInput disabled label="Nb views" source="views" />
        </SimpleForm>
    </Edit>
);

export const WorldCreate = (props: any) => (
    <Create title="Create a World" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="icon_url" />
            <TextInput source="world_source" />
            <DateInput label="Creation date" source="created_at" />
        </SimpleForm>
    </Create>
);
