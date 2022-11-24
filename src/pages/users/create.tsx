import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { RiSave3Line } from 'react-icons/ri';

import { Input } from '../../components/Form/Input';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

interface CreateUserFormData {
   name: string;
   email: string;
   password: string;
   password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
   name: yup.string().required("Nome obrigatório"),
   email: yup.string().required("E-mail obrigatório").email("Tipo de e-mail invalido"),
   password: yup.string().required("Senha obrigatória").min(6, "Minimo de 6 digitos"),
   password_confirmation: yup.string().oneOf([
      null, yup.ref('password')
   ], 'As senhas não coincidem'),
})

export default function CreateUser() {
   const { register, handleSubmit, formState, formState: { errors } } = useForm<CreateUserFormData>({
      resolver: yupResolver(createUserFormSchema),
      mode: 'onChange',
   })

   const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve, 1000)) //TODO Simulate server response delay
      console.log(values)
   }

   return (
      <Box>
         <Header />
         <Flex width="100%" marginBlock="6" maxWidth={1480} marginInline="auto" paddingInline="6">
            <Sidebar />

            <Box
               as="form"
               flex="1"
               borderRadius={8}
               backgroundColor="gray.800"
               padding={["6", "8"]}
               onSubmit={handleSubmit(handleCreateUser)}
            >
               <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
               <Divider marginBlock="6" borderColor="gray.700" />
               <VStack spacing="8">
                  <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                     <Input type="name" label='Nome Completo' error={errors.name} {...register('name')} />
                     <Input type="email" label='E-mail' error={errors.email} {...register('email')} />
                  </SimpleGrid>
                  <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
                     <Input type="password" label='Senha' error={errors.password} {...register('password')} />
                     <Input
                        type="password"
                        label='Confirmação de senha'
                        error={errors.password_confirmation}
                        {...register('password_confirmation')}
                     />
                  </SimpleGrid>
               </VStack>
               <Flex marginTop="8" justify="flex-end">
                  <HStack spacing="4">
                     <Link href="/users">
                        <Button colorScheme="whiteAlpha">Cancelar</Button>
                     </Link>
                     <Button
                        type='submit'
                        isLoading={formState.isSubmitting}
                        colorScheme="pink"
                        rightIcon={<Icon as={RiSave3Line} />}
                     >
                        Salvar
                     </Button>
                  </HStack>
               </Flex>

            </Box>
         </Flex>
      </Box>
   );
}