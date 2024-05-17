import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import FormEdit from "./FormEdit";
const EditUser = ({
  isOpen,
  onClose,
  userData,
  setDetails,
  operation,
  setTotalCount,
}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormEdit
              userData={userData}
              setDetails={setDetails}
              operation={operation}
              setTotalCount={setTotalCount}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      ;
    </div>
  );
};

export default EditUser;
