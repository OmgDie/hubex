import React, { useState } from 'react';
import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 500px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, onSend }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    onSend(email);
    onClose();
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <h2>Send Email</h2>
        <Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button onClick={() => handleSend()}>Send</Button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
