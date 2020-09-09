import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Modal } from 'antd';

import {
  Heading,
  InputRow,
  InputIcon,
  Input,
  InputTel,
  Form,
  Select,
  CloseIcon
 } from './styles';
 import './styles.css';

 import { sendLeadModal } from '../../redux/modules/leadModal/leadModalAction';

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
  background: '#E5E5E5',
  opacity: '1',
  borderBottom: 'none',
};

const closeIconStyle = {
  width: '20px',
  height: 'auto'
};

const LeadModalContainer = ({open, callback}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let phone_number = e.target.phone_number.value;
    let email = e.target.email.value;
    let course = e.target.course.value;

    const data = {
      name,
      phone_number,
      email,
      course
    };
    console.log(data, 'data')
    sendLeadModal(data);
  };

  return (
    <>
      <Modal
        centered
        visible={open}
        bodyStyle={customBodyStyle}
        closable={false}
      >
        <Form onSubmit={handleSubmit}>
          <CloseIcon onClick={() => callback()}>
            <img style={closeIconStyle} src={IconClose} alt="..." />
          </CloseIcon>
          <Heading>Fill in an application</Heading>
          <InputRow>
            <InputIcon><img src={IconEdit} alt="icon"/></InputIcon>
            <Input
              type="text" 
              name="name" 
              placeholder="Name" 
              maxLength={20}
            />
          </InputRow>
          <InputRow>
            <InputIcon><img src={IconPhone} alt="icon"/></InputIcon>
            <InputTel
              type="tel" 
              name="phone_number" 
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
              <option selected disabled defaultValue='default'>Choose the Course...</option>
              <option value="1">Frontend development</option>
              <option value="2">Backend development</option>
              <option value="3">UI/UX design</option>
            </Select>
          </InputRow>
          <InputRow>
            <PrimaryButton formBtn>
              Submit
            </PrimaryButton>
          </InputRow>
        </Form>
      </Modal>
    </>
  )
};

LeadModalContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  sendLeadModal: PropTypes.func.isRequired
};

LeadModalContainer.defaultProps = {
  loading: false,
  error: false,
  success: false,
  sendLeadModal: () => {}
};

const mapStateToProps = (state) => ({
  loading: state.leadModalReducer.loading,
  error: state.leadModalReducer.error,
  success: state.leadModalReducer.success
});

const mapDispatchToProps = (dispatch) => ({
  sendLeadModal: (data) => dispatch(sendLeadModal(data))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LeadModalContainer);
