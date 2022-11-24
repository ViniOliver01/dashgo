import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import Link from 'next/link';

export default function UserList() {
   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   })

   return (
      <Box>
         <Header />
         <Flex
            width="100%"
            marginBlock="6"
            maxWidth={1480}
            marginInline="auto"
            paddingInline="6"
         >
            <Sidebar />

            <Box
               flex="1"
               borderRadius={8}
               backgroundColor="gray.800"
               padding="8"
            >
               <Flex marginBottom="8" justify="space-between" align="center">
                  <Heading size="lg" fontWeight="normal">Usuários</Heading>
                  <Link href="/users/create">
                     <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                        Criar novo
                     </Button>
                  </Link>
               </Flex>
               <Table colorScheme="whiteAlpha">
                  <Thead>
                     <Tr>
                        <Th paddingInline={["4", "4", "6"]} color="gray.300" width="8">
                           <Checkbox colorScheme="pink" />
                        </Th>
                        <Th>Usuário</Th>
                        {isWideVersion && <Th>Data de cadastro</Th>}
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td paddingInline={["4", "4", "6"]}>
                           <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                           <Box>
                              <Text fontWeight="bold">Vinicius Oliveira</Text>
                              <Text fontSize="small" color="gray.300">vinioliver.dev@gmail.com</Text>
                           </Box>
                        </Td>
                        {isWideVersion && <Td>04 de Abril, 2021</Td>}
                     </Tr>

                  </Tbody>
               </Table>
               <Pagination />
            </Box>
         </Flex>
      </Box>
   );
}