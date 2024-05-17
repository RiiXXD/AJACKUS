import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import DisplayUser from "./components/users";
import { FaPlus } from "react-icons/fa6";
function App() {
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
        <Button bg="ctaPurple">
          {" "}
          <FaPlus /> Add User
        </Button>
      </Flex>
      <DisplayUser />
    </Box>
  );
}

export default App;
