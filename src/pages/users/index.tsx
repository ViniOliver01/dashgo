import { Box, Flex, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text, useBreakpointValue, Spinner } from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { IoReload } from 'react-icons/io5'

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import { useQuery } from 'react-query'

interface UserProps {
   createdAt: string;
   email: string;
   id: string;
   name: string;
}

export default function UserList() {

   const { data, isLoading, isFetching, error, refetch } = useQuery('users', async () => {
      const response = await fetch('http://localhost:3000/api/users')
      const data = await response.json()

      const users = data.users.map((user: UserProps) => {
         return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
               day: '2-digit',
               month:'long',
               year: 'numeric',
            }),
         }
      })

      return users
   }, {
      staleTime: 1000 * 5 // 5 segundos
   })

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
                  <Heading size="lg" fontWeight="normal">
                     Usuários
                  </Heading>
                  <Flex
                     gap="5"
                  >
                    <Button
                       size="sm"
                       fontSize="sm"
                       colorScheme="none"
                       onClick={() => refetch()}
                       >
                        {isFetching && <Spinner size="sm"/>}
                        {!isFetching && <Icon as={IoReload} fontSize="20" fontWeight="bold"/>}
                        
                     </Button>
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
                           {data.map((user: UserProps) => {
                              return(
                                 <Tr key={user.id}>
                                    <Td paddingInline={["4", "4", "6"]}>
                                       <Checkbox colorScheme="pink" />
                                    </Td>
                                    <Td>
                                       <Box>
                                          <Text fontWeight="bold">{user.name}</Text>
                                          <Text fontSize="small" color="gray.300">{user.email}</Text>
                                       </Box>
                                    </Td>
                                    {isWideVersion && <Td>{user.createdAt}</Td>}
                                 </Tr>
                              )
                           })}
                           

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