// components/Pagination.js
import { Flex, Text, Button } from "@chakra-ui/react";
import { GrPrevious, GrNext } from "react-icons/gr";
import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
const Pagination = ({
  page,
  limit,
  totalCount,
  setPage,
  handleLimitChange,
}) => (
  <Flex justify="flex-end" align="center" color="fontColorGrey" mt="1em">
    <Text>Rows per page</Text>
    <Flex align="center" color="fontColorGrey" ml={2}>
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
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
    <Button
      isDisabled={1 === page}
      onClick={() => setPage((prev) => prev - 1)}
      size="sm"
    >
      <GrPrevious />
    </Button>
    <Text fontSize="2em" color="headingColorWhite">
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
);

export default Pagination;
