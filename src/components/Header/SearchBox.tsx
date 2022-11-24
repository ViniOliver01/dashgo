import { Divider, Flex, Icon, Input } from "@chakra-ui/react";
import { useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

export default function SearchBox() {
   const [search, setSearch] = useState('')
   
   function handleInputSearch(){
      console.log("🚀 / SearchBox / search", search)
   }

   function handleInputClean(){
      setSearch('')
   }

   return (
      <Flex
         as="label"
         flex="1"
         paddingBlock="4"
         paddingInline="8"
         ml="6"
         maxWidth={480}
         alignItems="center"
         color="gray.200"
         position="relative"
         background="gray.800"
         borderRadius="full"
      >
         <Input
            color="gray.50"
            variant="unstyled"
            paddingInline="4"
            marginRight="4"
            placeholder='Buscar na plataforma'
            _placeholder={{ color: 'gray.400' }}
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyUp={e => e.key == 'Enter' ? handleInputSearch() : null}
         />
         {!!search && (
            <Icon
            as={RiCloseLine}
            fontSize="22"
            marginRight="3"
            color="gray.300"
            _hover={{cursor:
               'pointer'}}
            onClick={handleInputClean} 
               />
         )}
         <Divider orientation='vertical' borderColor="gray.600" height="8" marginRight="3"/>
         <Icon as={RiSearchLine} fontSize="20" _hover={{cursor: 'pointer'}} onClick={handleInputSearch}/>
      </Flex>
   );
}