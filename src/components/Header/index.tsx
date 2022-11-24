import { Flex, Divider, useBreakpointValue, IconButton, Icon } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';

import Logo from './Logo';
import NotificationsNav from './NotificationsNav';
import Profile from './Profile';
import SearchBox from './SearchBox';

export default function Header() {
   const { onOpen } = useSidebarDrawer()

   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   })
   
   return (
      <Flex
         as="header"
         width="100%"
         maxWidth={1480}
         height="20"
         marginInline="auto"
         marginTop="4"
         paddingInline="6"
         alignItems="center"
      >
         { !isWideVersion && (
            <IconButton
               aria-label='Open navigation'
               display="flex"
               icon={<Icon as={RiMenuLine} />}
               fontSize="24"
               variant="unstyled"
               onClick={onOpen}
               marginRight="2"
            />
         )}
         <Logo />
         { isWideVersion && <SearchBox /> }
         <Flex align="center" marginLeft="auto">
            <NotificationsNav />
            <Divider orientation='vertical' borderColor="gray.700" height="8" />
            <Profile showProfileData={isWideVersion}/>
         </Flex>
      </Flex>
   );
}