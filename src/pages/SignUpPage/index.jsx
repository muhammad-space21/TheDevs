import React from 'react';
import { reduxForm, Field } from 'redux-form';

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
import IconPassword from '../../assets/icons/password.svg';


// validation
const validate = values => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = "Required"
  }
  if (!values.phone) {
    errors.phone = "Required"
  }
  if (!values.email) {
    errors.email = "Required"
  }
  if (!values.password) {
    errors.password = "Required"
  }
}

const renderInput  = ({ input, meta, placeholder }) => {
  return (
    <div>
      <Input placeholder={placeholder} {...input} />
      {meta.error && meta.touched && <span>meta.error</span>}
    </div>
  )
};

let SignUpPage = ({  values, handleSubmit, submitting }) => {
  console.log(values, 'values')
  return (
    <Container>
      <Component>
        <ImageWrapper> <img src={Illustration} alt="illustration" /></ImageWrapper>
        <Form onSubmit={handleSubmit}>
          <Heading>Sign up to become a member</Heading>
          <InputRow>
            <InputIcon><img src={IconEdit} alt="icon"/></InputIcon>
            <Field type="text" name="fullname" placeholder="Full name" component={renderInput} />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconPhone} alt="icon"/></InputIcon>
            <Field type="tel" name="phone" placeholder="Phone number" component={renderInput} />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconEmail} alt="icon"/></InputIcon>
            <Field type="email" name="email" placeholder="Email address" component={renderInput} />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconPassword} alt="icon"/></InputIcon>
            <Field type="password" name="password" placeholder="Password" component={renderInput} />
          </InputRow>
          <InputRow><PrimaryButton disabled={submitting} type="submit" formBtn>Sign up</PrimaryButton></InputRow>
        </Form>
      </Component>
    </Container>
  )
};


SignUpPage = reduxForm({
  form: 'signUp',
  destroyOnUnmount: false
})(SignUpPage);

export default SignUpPage;