import { Button } from "@chakra-ui/react";

interface PaginationItemProps{
   isCurrentPage?: boolean;
   pageNumber: number;
   onPageChange: (page: number) => void;
}

export default function PaginationItem({pageNumber, isCurrentPage = false, onPageChange}: PaginationItemProps){
   if(isCurrentPage){
      return (
         <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme="pink"
            disabled
            _disabled={{
            backgroundColor: "pink.500",
            cursor: 'default',
            }}
         >
            {pageNumber}
         </Button>
      )
   } 
   else{
      return (
         <Button
            size="sm"
            fontSize="xs"
            width="4"
            backgroundColor="gray.700"
            _hover={{
               backgroundColor: "gray.500"
            }}
            onClick={() => onPageChange(pageNumber)}
         >
            {pageNumber}
         </Button>
      )
   }
}