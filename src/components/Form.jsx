import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { validateEmail } from '../utils/validate';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter, sans-serif';
  color: rgb(30, 32, 34);
  font-weight: 700;
  @media (max-width: 640px) {
    padding: 10px;
  }
`;

const TextDescription = styled.p`
  font-weight: 500;
  line-height: 1.57;
  color: rgb(103, 119, 136);
`;

const StyledHeadline = styled.div`
  font-size: 1.25rem;
  margin: 0px 0px 0.35em;
  font-weight: 700;
  line-height: 1.6;
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  font-size: 0.875rem;
  margin: 0px 0px 1rem;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  padding: 16.5px 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  ${props =>
    props.error &&
    css`
      border-color: red;
    `}
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
  resize: none;
`;

const Error = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
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

const CustomInput = ({ input, meta, ...rest }) => (
  <FieldWrapper>
    <StyledInput {...input} {...rest} error={meta.error && meta.touched} />
    {meta.error && meta.touched && <Error>{meta.error}</Error>}
  </FieldWrapper>
);

const CustomTextArea = ({ input, meta, ...rest }) => (
  <FieldWrapper>
    <StyledTextArea {...input} {...rest} />
    {meta.error && meta.touched && <Error>{meta.error}</Error>}
  </FieldWrapper>
);

const MyForm = ({ onSubmit }) => (
  <Container>
    <StyledHeadline>Change your private information</StyledHeadline>
    <TextDescription>
      Please read our <Link href="https://www.google.com">terms of use</Link> to
      be informed how we manage your private data.
    </TextDescription>
    <Divider />
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <FormWrapper onSubmit={handleSubmit}>
          <Field
            name="name"
            render={({ input, meta }) => (
              <CustomInput
                input={input}
                meta={meta}
                placeholder="First name *"
              />
            )}
          />
          <Field
            name="email"
            render={({ input, meta }) => (
              <CustomInput input={input} meta={meta} placeholder="Email *" />
            )}
          />
          <FullWidthField>
            <Field
              name="bio"
              render={({ input, meta }) => (
                <CustomTextArea input={input} meta={meta} placeholder="Bio" />
              )}
            />
          </FullWidthField>
          <Field
            name="country"
            render={({ input, meta }) => (
              <CustomInput input={input} meta={meta} placeholder="Country *" />
            )}
          />
          <Field
            name="city"
            render={({ input, meta }) => (
              <CustomInput input={input} meta={meta} placeholder="City *" />
            )}
          />
          <FullWidthField>
            <Field
              name="address"
              render={({ input, meta }) => (
                <CustomInput
                  input={input}
                  meta={meta}
                  placeholder="Address *"
                />
              )}
            />
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
