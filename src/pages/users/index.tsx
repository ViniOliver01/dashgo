import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import { useEffect } from 'react';
import { useQuery } from 'react-query'

export default function UserList() {

   const { data, isLoading, error } = useQuery('users', async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()

      return data
   })

   const isWideVersion = useBreakpointValue({
      base: false,
      lg: true,
   })

   useEffect(()=>{
      fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
   },[])

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
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                        >
                        Criar novo
                     </Button>
                  </Link>
               </Flex>
               { isLoading ? (
                  <Flex justify="center">
                     <Spinner />
                  </Flex>
               ) : error ? (
                  <Flex justify="center">
                     <Text>Falha ao obter dados dos usuários</Text>
                  </Flex>
               ) : (
                  <>
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
                  </>
               )}
            </Box>
         </Flex>
      </Box>
   );
}