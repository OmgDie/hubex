import React from 'react';
import { Form, Field } from 'react-final-form';
import styled from '@emotion/styled';
import { validateEmail } from '../utils/validate';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 640px) {
    padding: 10px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
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

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Message is required';
  }

  return errors;
};

const MyForm = ({ onSubmit }) => (
  <Container>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Field name="name">
            {({ input, meta }) => (
              <div>
                <label>Name</label>
                <StyledInput
                  {...input}
                  type="text"
                  placeholder="Name"
                  required
                />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <StyledInput
                  {...input}
                  type="email"
                  placeholder="Email"
                  required
                />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="message">
            {({ input, meta }) => (
              <div>
                <label>Message</label>
                <StyledTextarea {...input} placeholder="Message" required />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Button type="submit">Save</Button>
        </FormWrapper>
      )}
    />
  </Container>
);

export default MyForm;
