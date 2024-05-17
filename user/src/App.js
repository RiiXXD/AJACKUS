import logo from "./logo.svg";
import "./App.css";
import { Flex, Heading, Text, Box, Button } from "@chakra-ui/react";
import userRow from "./components/userRow";
function App() {
  return (
    <Flex
      align={"center"}
      justify="space-between"
      w="100%"
      minH="100vh"
      bg="backColor"
      p="1em"
    >
      <Box>
        <Heading color="headingColorWhite">User Management System</Heading>
        <Text color="fontColorGrey">
          Manage User Accounts and Acess Levels with the User Management Tab in
          App
        </Text>
      </Box>
      <Button bg="ctaPurple"> Add User</Button>
    </Flex>
  );
}

export default App;
