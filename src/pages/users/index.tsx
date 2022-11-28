import { 
   Box, 
   Flex, 
   Heading, 
   Button, 
   Icon, 
   Table, 
   Thead, 
   Tr, 
   Th, 
   Checkbox, 
   Tbody, 
   Td, 
   Text, 
   useBreakpointValue, 
   Spinner 
} from '@chakra-ui/react';
import { RiAddLine } from 'react-icons/ri';
import { IoReload } from 'react-icons/io5'

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Pagination from '../../components/Pagination';
import Link from 'next/link';
import { useUsers } from './../../services/hooks/useUsers';
import { useState } from 'react';

export default function UserList() {
   const [page, setPage] = useState(1)
   const { data, isLoading, isFetching, error, refetch } = useUsers(page)

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
                        {isFetching && !isLoading && <Spinner size="sm"/>}
                        {!isFetching && !isLoading && <Icon as={IoReload} fontSize="20" fontWeight="bold"/>}
                        
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
                           {data.users?.map((user) => {
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
                     <Pagination 
                        totalCountOfRegisters={data.totalCount}
                        currentPage={page}
                        onPageChange={setPage}
                     />
                  </>
               )}
            </Box>
         </Flex>
      </Box>
   );
}