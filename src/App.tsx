import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import buildHasuraProvider from 'ra-data-hasura';
import { Admin, DataProvider, Resource, ShowGuesser } from 'react-admin';
import { MenuList } from './modules/menu/components/menu-list/menu-list.component';
import { MenuEdit } from './modules/menu/components/menu-edit/menu-edit.component';
import { MenuCreate } from './modules/menu/components/menu-create/menu-create.component';

export const App = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        clientOptions: { uri: 'http://localhost:8080/v1/graphql' },
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;
  return (
    <>
      <CssBaseline />
      <Admin dataProvider={dataProvider}>
        <Resource name="pizza_menu" list={MenuList} edit={MenuEdit} show={ShowGuesser} create={MenuCreate} />
      </Admin>
    </>
  );
};
