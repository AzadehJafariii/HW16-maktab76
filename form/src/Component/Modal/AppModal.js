import React, { useState } from "react";
import Modal from "./Modal";

export default function AppModal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Something
        </Modal>
      </div>
      <div></div>
    </>
  );
}
