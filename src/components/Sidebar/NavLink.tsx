import { Icon, Text, Box } from "@chakra-ui/react";
import { ElementType } from "react";

import Activelink from './../Activelink';

interface NavLinkProps{
   name: string;
   icon: ElementType;
   href: string;
}

export default function NavLink({name, icon, href}: NavLinkProps){

  return (
   <Activelink href={href}>
      <Box display="flex" alignContent="center">
         <Icon as={icon} fontSize="20"/>
         <Text marginLeft="4" fontWeight="medium">{name}</Text>
      </Box>
   </Activelink>
  );
}