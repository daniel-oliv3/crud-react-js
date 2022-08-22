import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl, 
    Input,
    Box,

} from "@chakra-ui/react"

import { useState } from "React";

/* ModalComp */
const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {

    const [name, setName] = useState(dataEdit.name || "");
    const [email, setEmail] = useState(dataEdit.email || "");

    return (
      <>
    
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Cadastro de Clientes</ModalHeader>
                <ModalCloseButton />
                <ModalBady>
                    <FormControl display="flex" flexDir="column" gap={4}>
                        <Box>
                            <FormLabel>Nome</FormLabel>
                            <Input 
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Box>
                    </FormControl>
                </ModalBady>
            </ModalContent>
        </Modal>

      </>
    )
  }
  
  export default ModalComp;