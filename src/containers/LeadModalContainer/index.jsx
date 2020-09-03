import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import {
  Heading,
  InputRow,
  InputIcon,
  Input,
  InputTel,
  Form,
  Select
 } from './styles';
 import './styles.css';

 //com.
 import PrimaryButton from '../../components/PrimaryButton';
 import SpinnerSmall from '../../components/SpinnerSmall';
 // img.
 import IconEdit from '../../assets/icons/edit-1.png';
 import IconPhone from '../../assets/icons/phone-1.png';
 import IconEmail from '../../assets/icons/email.png';
 import IconSelect from '../../assets/icons/select.svg';
 import IconClose from '../../assets/icons/close.svg';

const customBodyStyle = {
  width: '100%',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'transparent linear-gradient(119deg, #009FFF 0%, #EC2F4B 100%) 0% 0% no-repeat padding-box',
  opacity: '1',
  borderBottom: 'none',
};

const closeIconStyle = {
  width: '20px',
  height: 'auto'
};

const LeadModalContainer = () => {
  // const [modalShow, setModalShow] = useState(false);

  // onSubmmit close func
  const submitClose = () => {
    let success = true;
    if (success === true) {
      setTimeout(() => {
        // setModalShow(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* <Button type="primary" onClick={() => setModalShow(true)}>
        Vertically centered modal dialog
      </Button> */}
      <Modal
        centered
        // visible={modalShow}
        // onOk={() => setModalShow(false)}
        // onCancel={() => setModalShow(false)}
        bodyStyle={customBodyStyle}
        closeIcon = {<img style={closeIconStyle} src={IconClose} alt="..." />}
      >
        <Form>
          <Heading>Fill in an application</Heading>
          <InputRow>
            <InputIcon><img src={IconEdit} alt="icon"/></InputIcon>
            <Input
              type="text" 
              name="Name" 
              placeholder="Name" 
              maxLength={20}
            />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconPhone} alt="icon"/></InputIcon>
            <InputTel 
              type="tel" 
              name="phone" 
              placeholder="Phone number" 
              mask={['(', /9/, /9/, /8/, ')', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconEmail} alt="icon"/></InputIcon>
            <Input 
              type="email" 
              name="email" 
              placeholder="Email address" 
            />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconSelect} alt="icon"/></InputIcon>
            <Select 
              type="select" 
              name="course" 
            >
              <option value="" disabled selected hidden>Choose the Course...</option>
              <option value="1">Frontend development</option>
              <option value="2">Backend development</option>
              <option value="3">UI/UX design</option>
            </Select>
          </InputRow>
          <InputRow>
            <PrimaryButton onClick={submitClose} formBtn>
              Submit
            </PrimaryButton>
          </InputRow>
        </Form>
      </Modal>
    </>
  )
};

export default LeadModalContainer;
