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

    /* Função HandleSave */
    const handleSave = () => {
        if(!name || !email) return;

        /* verifica se o email ja existe*/
        if(emailAllreadyExists()){
            return alert("E-mail já cadastrado!");
        }

        if(Object.keys(dataEdit).length){
            data[dataEdit.index] = { name, email };
        }

        const emailAllreadyExists = () => {
            if(dataEdit.email !== email && data?.length){
                return data.find((item) => item.email === email);
            }

            return false;
        };

    }

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
                        <Box>
                            <FormLabel>E-mail</FormLabel>
                            <Input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>
                    </FormControl>
                </ModalBady>

                <ModalFooter justifyContent="start">
                    <Button colorScheme="green" mr={3} onClick={handleSave}>
                        SALVAR
                    </Button>
                    <Button colorScheme="red" onClick={onClose}>
                        CANCELAR
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>

      </>
    )
  }
  
  export default ModalComp;