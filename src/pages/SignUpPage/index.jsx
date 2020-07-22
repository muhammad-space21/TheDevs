import React from 'react';

import { 
  Container, 
  Component, 
  Form, 
  ImageWrapper, 
  Heading,
  InputRow,
  InputIcon,
  Input
} from './styles';

import PrimaryButton from '../../components/PrimaryButton';

import Illustration from '../../assets/images/computer.png';
import IconEdit from '../../assets/icons/edit-1.png';
import IconPhone from '../../assets/icons/phone-1.png';
import IconEmail from '../../assets/icons/email.png';

const SignUpPage = () => {
  return (
    <Container>
      <Component>
        <ImageWrapper> <img src={Illustration} alt="illustration" /></ImageWrapper>
        <Form>
          <Heading>Sign up to become a member</Heading>
          <InputRow>
            <InputIcon><img src={IconEdit} alt="icon"/></InputIcon>
            <Input type="text" placeholder="Full name" />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconPhone} alt="icon"/></InputIcon>
            <Input type="text" placeholder="Phone number" />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconEmail} alt="icon"/></InputIcon>
            <Input type="text" placeholder="Email address" />
          </InputRow>
          <InputRow><PrimaryButton formBtn>Sign up</PrimaryButton></InputRow>
        </Form>
      </Component>
    </Container>
  )
};

export default SignUpPage;