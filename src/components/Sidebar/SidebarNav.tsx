import { Stack } from "@chakra-ui/react";

import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

import NavLink from './NavLink';
import NavSection from './NavSection';

interface SidebarNavProps{
}

export default function SidebarNav({}: SidebarNavProps){

  return (
   <Stack spacing="12" align="flex-start">
      <NavSection title='GERAL'>
         <NavLink name='Dasboard' href="/dashboard" icon={RiDashboardLine} />
         <NavLink name='Usuarios' href="/users" icon={RiContactsLine} />
      </NavSection>

      <NavSection title='AUTOMAÇÃO'>
         <NavLink name='Formulários' href="/forms" icon={RiInputMethodLine} />
         <NavLink name='Automação' href="/automation" icon={RiGitMergeLine} />
      </NavSection>
    </Stack>
  );
}