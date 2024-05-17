import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Table,
  Flex,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Button,
  Avatar,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { GrPrevious, GrNext } from "react-icons/gr";
const DisplayUser = () => {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const [details, setDetails] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const totalCount = 10;
  // Fetch
  const getUsers = async (page, limit) => {
    const response = await axios.get(
      `${BASE_URL}/users?_page=${page}&_limit=${limit}`
    );
    setDetails((prev) => response.data);
    console.log(response.data);
  };
  const handleLimitChange = (value) => {
    setLimit(Number(value));
  };
  useEffect(() => {
    getUsers(page, limit);
  }, [page, limit]);

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
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {details.map((user, index) => {
              return (
                <Tr key={index}>
                  <Td color={"headingColorWhite"}>{user.id}</Td>

                  <Td color={"headingColorWhite"}>
                    {" "}
                    <Flex align="center" gap="10px">
                      <Avatar
                        size="sm"
                        name={user.name}
                        src="https://bit.ly/broken-link"
                      />
                      {user.name}
                    </Flex>
                  </Td>
                  <Td color={"headingColorWhite"}>{user.email}</Td>
                  <Td color={"headingColorWhite"}>{user.name}</Td>
                  <Td>
                    <Button bg="ctaPurple" borderRadius={"1em"} mr="10px">
                      <FaEdit />
                    </Button>
                    <Button bg="ctaPurple" borderRadius={"1em"}>
                      <MdDelete />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify={"flex-end"} align="center" color="fontColorGrey">
        <Text>Rows per page</Text>
        <NumberInput
          size="sm"
          maxW="20"
          step={1}
          value={limit}
          min={2}
          max={10}
          onChange={(valueString) => handleLimitChange(valueString)}
          ml={2}
        >
          <NumberInputField />{" "}
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button
          isDisabled={1 === page}
          onClick={() => setPage((prev) => prev - 1)}
          size="sm"
        >
          <GrPrevious />
        </Button>
        <Text fontSize={"2em"} color="headingColorWhite">
          {page}
        </Text>
        <Button
          isDisabled={Math.ceil(totalCount / limit) === page}
          onClick={() => setPage((prev) => prev + 1)}
          size="sm"
        >
          <GrNext />
        </Button>
      </Flex>
    </Box>
  );
};

export default DisplayUser;
