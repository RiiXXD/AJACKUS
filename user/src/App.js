import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import DisplayUser from "./components/users";
import { FaPlus } from "react-icons/fa6";
import { createUser } from "./requests";
import EditUser from "./components/EditUser";
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState([]);
  const [totalCount, setTotalCount] = useState(10);

  return (
    <Box w="100%" minH="100vh" bg="backColor" p="1em 2em">
      <Flex align={"center"} justify="space-between" w="100%">
        <Box>
          <Heading color="headingColorWhite">User Management System</Heading>
          <Text color="fontColorGrey">
            Manage User Accounts and Acess Levels with the User Management Tab
            in App
          </Text>
        </Box>
        <Button
          bg="ctaPurple"
          onClick={() => {
            onOpen();
          }}
        >
          <FaPlus /> Add User
        </Button>
      </Flex>
      <DisplayUser
        setDetails={setDetails}
        details={details}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
      />
      <EditUser
        isOpen={isOpen}
        onClose={onClose}
        operation={"add"}
        setDetails={setDetails}
        setTotalCount={setTotalCount}
      />
    </Box>
  );
}

export default App;
