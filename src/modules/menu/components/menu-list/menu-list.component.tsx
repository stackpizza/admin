import { Datagrid, List, NumberField, TextField } from 'react-admin';

export const MenuList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <NumberField source="price" />
      <NumberField source="weight" />
    </Datagrid>
  </List>
);
