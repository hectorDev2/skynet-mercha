import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon } from "./icons/DeleteIcon";

export default function ModalButton({
  productId,
  productTag,
}: {
  productId: number;
  productTag: string;
}) {
  console.log(productTag);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const deleteProduct = async () => {
    const res = await fetch(`/api/${productTag}/${productId}`, {
      method: "DELETE",
    });
    console.log(res);
    window.location.reload();
    return res.json();
  };

  return (
    <>
      <Tooltip color="danger" content="eliminar polo">
        <Button onPress={onOpen}>
          <DeleteIcon />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Estas seguro?
              </ModalHeader>
              <ModalBody>
                <p>estas seguro de eliminar este polo?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  NO
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    deleteProduct();

                    onClose();
                  }}
                >
                  Si estoy seguro
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
