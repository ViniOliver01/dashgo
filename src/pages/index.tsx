import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {Input} from '../components/Form/Input'

interface SignInFormData {
   email: string;
   password: string;
}

const signInFormSchema = yup.object().shape({
   email: yup.string().required("E-mail obrigatório").email("Tipo de e-mail invalido"),
   password: yup.string().required("Senha obrigatória"),
})

export default function SignIn() {
   const { register, handleSubmit, formState, formState: { errors }} = useForm<SignInFormData>({
      resolver: yupResolver(signInFormSchema),
      mode: 'onChange',
   })
   
   const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
      await new Promise(resolve => setTimeout(resolve, 1000)) //TODO Simulate server response delay
      console.log(values)
   }

   return (
      <Flex
         w="100vw"
         h="100vh"
         align="center"
         justify="center"
      >
         <Flex
            as="form"
            width="100%"
            maxWidth={360}
            bg="gray.800"
            padding="8"
            borderRadius={8}
            flexDirection="column"
            onSubmit={handleSubmit(handleSignIn)}
         >
            <Stack spacing="4" >
               <Input
                 label='E-mail'
                 type="email"
                 error={errors.email}
                 {...register('email')} 
               />
               <Input
                 label='Senha'
                 type="password"
                 error={errors.password}
                 {...register('password')} 
               />
            </Stack>

            <Button isLoading={formState.isSubmitting} type="submit" marginTop="6" colorScheme="pink">Entrar</Button>
         </Flex>
      </Flex>
   );
}