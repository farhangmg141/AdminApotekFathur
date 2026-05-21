import React from 'react';
import { Icon } from '@chakra-ui/react';
import {
  MdHome,
  MdRestaurantMenu,
  MdListAlt,
  MdPeople,
  MdWidgets,
} from 'react-icons/md';

// Admin Imports (dari _archive/pertemuan6)
import DasborRestoran from './_archive/pertemuan6/views/admin/beranda';
import MenuMakanan from './_archive/pertemuan6/views/admin/pasar';
import PesananPelanggan from './_archive/pertemuan6/views/admin/tabel-data';
import DaftarPelanggan from './_archive/pertemuan6/views/admin/profil';
import ErrorView from './_archive/pertemuan6/views/admin/error';

// Pages Imports
import ComponentsPage from './pages/Components';

const routes = [
  {
    name: 'Dasbor Apotek',
    layout: '/admin',
    path: '/beranda',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <DasborRestoran />,
  },
  {
    name: 'Daftar Obat',
    layout: '/admin',
    path: '/menu',
    icon: (
      <Icon
        as={MdRestaurantMenu}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <MenuMakanan />,
  },
  {
    name: 'Resep Pasien',
    layout: '/admin',
    icon: <Icon as={MdListAlt} width="20px" height="20px" color="inherit" />,
    path: '/pesanan',
    component: <PesananPelanggan />,
  },
  {
    name: 'Daftar Pasien',
    layout: '/admin',
    path: '/pelanggan',
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
    component: <DaftarPelanggan />,
  },
  {
    name: 'Komponen UI',
    layout: '/admin',
    path: '/komponenui',
    icon: <Icon as={MdWidgets} width="20px" height="20px" color="inherit" />,
    component: <ComponentsPage />,
  },
];

export const errorRoutes = [
  {
    name: 'Error 400',
    layout: '/admin',
    path: '/error/400',
    component: <ErrorView />,
  },
  {
    name: 'Error 401',
    layout: '/admin',
    path: '/error/401',
    component: <ErrorView />,
  },
  {
    name: 'Error 403',
    layout: '/admin',
    path: '/error/403',
    component: <ErrorView />,
  },
  {
    name: 'Error 404',
    layout: '/admin',
    path: '/error/404',
    component: <ErrorView />,
  },
  {
    name: 'Error Handler',
    layout: '/admin',
    path: '/error/:code',
    component: <ErrorView />,
  }
];

export default routes;
