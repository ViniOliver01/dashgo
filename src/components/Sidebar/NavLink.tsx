import { Icon, Text, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

import Activelink from './../Activelink';

interface NavLinkProps extends ChakraLinkProps{
   name: string;
   icon: ElementType;
   href: string;
}

export default function NavLink({name, icon, href, ...rest}: NavLinkProps){

  return (
   <Activelink href={href}>
      <ChakraLink display="flex" alignContent="center" {...rest}>
         <Icon as={icon} fontSize="20"/>
         <Text marginLeft="4" fontWeight="medium">{name}</Text>
      </ChakraLink>
   </Activelink>
  );
}