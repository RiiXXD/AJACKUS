import { Box } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Flex,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
} from "@chakra-ui/react";

const DisplayUser = () => {
  return (
    <Box bg="tableColor" borderRadius={"20px"} p="2em 1em">
      <TableContainer color={"fontColorGrey"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={"headingColorWhite"}>Id</Th>

              <Th color={"headingColorWhite"}>User</Th>
              <Th color={"headingColorWhite"}>Email</Th>
              <Th color={"headingColorWhite"}>Department</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Id</Td>
              <Td>
                <Flex align="center" gap="10px">
                  <Avatar
                    size="sm"
                    name="Rishita Mukherjee"
                    src="https://bit.ly/broken-link"
                  />
                  User
                </Flex>
              </Td>
              <Td>Email</Td>
              <Td>Department</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DisplayUser;
