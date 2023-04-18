import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" />
      <NumberInput source="price" />
      <NumberInput source="weight" />
      <TextInput source="ingredients" fullWidth />
      <TextInput source="image" fullWidth />
    </SimpleForm>
  </Create>
);
