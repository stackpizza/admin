import { Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="image" />
      <TextInput source="ingredients" />
      <NumberInput source="price" />
      <TextInput source="title" />
      <NumberInput source="weight" />
    </SimpleForm>
  </Edit>
);
