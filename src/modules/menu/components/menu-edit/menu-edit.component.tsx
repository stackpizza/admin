import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <NumberInput source="price" />
      <NumberInput source="weight" />
      <TextInput source="ingredients" fullWidth />
      <TextInput source="image" fullWidth />
    </SimpleForm>
  </Edit>
);
