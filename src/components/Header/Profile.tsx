import { Box, Flex, Text, Avatar, useBreakpointValue } from "@chakra-ui/react";

interface ProfileProps{
   showProfileData?: boolean;
}

export default function Profile({showProfileData}: ProfileProps){

  return (
   <Flex align="center" paddingLeft={["6","8"]}>
      {showProfileData && (
         <Box marginRight="4" textAlign="right">
            <Text>Vinicius Oliveira</Text>
            <Text color="gray.300" fontSize="small">
               vinioliver.dev@gmail.com
            </Text>
         </Box>
      )}
      <Avatar size="md" name="Vinicius Oliveira" src="https://github.com/ViniOliver01.png"/>
   </Flex>
  );
}