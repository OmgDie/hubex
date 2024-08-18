import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from '@emotion/styled';
import { validateEmail } from '../utils/validate';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter, sans-serif';
  color: rgb(30, 32, 34);
  font-weight: 700;
`;

const TextDescription = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(103, 119, 136);
`;

const StyledHeadline = styled.div`
  font-size: 1.25rem;
`;

const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  font-size: 0.875rem;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled(Field)`
  padding: 16.5px 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
  resize: none;
`;

const FullWidthField = styled.div`
  grid-column: span 2;
`;

const ButtonWrapper = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const LinkText = styled.span`
  margin-right: 10px;

  font-weight: 500;
  color: rgb(30, 32, 34);
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const validate = values => {
  const errors = {};
  if (!values.email || !validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.name) {
    errors.name = 'Please specify your first name';
  }
  if (!values.bio) {
    errors.bio = 'Required';
  }
  if (!values.country) {
    errors.country = 'Please specify your country name';
  }
  if (!values.city) {
    errors.city = 'Please specify your city name';
  }
  if (!values.address) {
    errors.address = 'Please specify your address';
  }
  return errors;
};

const MyForm = ({ onSubmit }) => (
  <Container>
    <StyledHeadline>Change your private information</StyledHeadline>
    <TextDescription>
      Please read our <Link href="https://www.google.com">terms of use</Link> to
      be informed how we manage your private data.
    </TextDescription>
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <FieldWrapper>
            <Label htmlFor="name">Enter your first name</Label>
            <Input name="name" component="input" placeholder="First name *" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="email">Enter your email</Label>
            <Input name="email" component="input" placeholder="Email *" />
          </FieldWrapper>
          <FullWidthField>
            <FieldWrapper>
              <Label htmlFor="bio">Bio</Label>
              <TextArea name="bio" component="textarea" placeholder="Bio" />
            </FieldWrapper>
          </FullWidthField>
          <FieldWrapper>
            <Label htmlFor="country">Country</Label>
            <Input name="country" component="input" placeholder="Country *" />
          </FieldWrapper>
          <FieldWrapper>
            <Label htmlFor="city">City</Label>
            <Input name="city" component="input" placeholder="City *" />
          </FieldWrapper>
          <FullWidthField>
            <FieldWrapper>
              <Label htmlFor="address">Enter your address</Label>
              <Input name="address" component="input" placeholder="Address *" />
            </FieldWrapper>
          </FullWidthField>
          <ButtonWrapper>
            <LinkText>
              You may also consider to update your{' '}
              <Link href="https://www.google.com">billing information</Link>.
            </LinkText>
            <Button type="submit">Save</Button>
          </ButtonWrapper>
        </FormWrapper>
      )}
    />
  </Container>
);

export default MyForm;
