import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components/Form';
import Modal from './components/Modal';
import { saveFormData } from './features/form/formSlice';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const handleFormSubmit = values => {
    setFormData(values);
    setIsModalOpen(true);
  };

  const handleModalSend = email => {
    const dataToSend = {
      ...formData,
      send_time: new Date().toLocaleString(),
      recipient_email: email,
    };
    dispatch(saveFormData(dataToSend));
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSend={handleModalSend}
      />
    </div>
  );
};

export default App;
