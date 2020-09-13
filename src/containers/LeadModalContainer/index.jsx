import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

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

//  import { sendLeadModal } from '../../redux/modules/leadModal/leadModalAction';
import { useForm } from '../../hooks/useForm';

 //com.
 import PrimaryButton from '../../components/PrimaryButton';
 import SpinnerSmall from '../../components/SpinnerSmall';
 import LeadModalAlertSuccess from '../../components/LeadModalAlertSuccess';
 // img.
 import IconEdit from '../../assets/icons/edit-1.png';
 import IconPhone from '../../assets/icons/phone-1.png';
 import IconEmail from '../../assets/icons/email.png';
 import IconSelect from '../../assets/icons/select.svg';
 import IconClose from '../../assets/icons/close.svg';

//Custom Styles
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

const LeadModalContainer = ({ open, callback }) => {
  const {
    error,
    success,
    loading,
    inputs,
    handleSubmit,
    handleChange
  } = useForm();


  return (
    <>
      <Modal
        centered
        visible={open}
        bodyStyle={customBodyStyle}
        closable={false}
      >
        {
          success ? (
            <LeadModalAlertSuccess closeCallback={() => callback()} />
            ) : (
            <Form onSubmit={handleSubmit}>
              <CloseIcon onClick={() => callback()}>
                <img src={IconClose} alt="..." />
              </CloseIcon>
              <Heading>Fill in an application</Heading>
              <InputRow>
                <InputIcon><img src={IconEdit} alt="icon" /></InputIcon>
                <Input
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  maxLength={20}
                  onChange={handleChange}
                  value={inputs.name}
                />
              </InputRow>
              <InputRow>
                <InputIcon><img src={IconPhone} alt="icon" /></InputIcon>
                <Input
                  type="tel" 
                  name="phone_number" 
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={inputs.phone_number}
                />
                {/* <InputTel
                  type="tel" 
                  name="phone_number" 
                  placeholder="Phone number"
                  mask={['(', /9/, /9/, /8/, ')', ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                /> */}
              </InputRow>
              <InputRow>
                <InputIcon><img src={IconEmail} alt="icon" /></InputIcon>
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Email address" 
                  onChange={handleChange}
                  value={inputs.email}
                />
              </InputRow>
              <InputRow>
                <InputIcon><img src={IconSelect} alt="icon" /></InputIcon>
                <Select 
                  type="select" 
                  name="course" 
                  onChange={handleChange}
                  value={inputs.course}
                >
                  <option disabled defaultValue='default'>Choose the Course...</option>
                  <option value="1">Frontend development</option>
                  <option value="2">Backend development</option>
                  <option value="3">UI/UX design</option>
                </Select>
              </InputRow>
              <InputRow>
                <PrimaryButton formBtn>
                  {
                    !error && loading ? (<SpinnerSmall />) : ('Submit')
                  }
                </PrimaryButton>
              </InputRow>
            </Form>
          )
        }
      </Modal>
    </>
  )
};

// LeadModalContainer.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   error: PropTypes.bool.isRequired,
//   success: PropTypes.bool.isRequired,
//   sendLeadModal: PropTypes.func.isRequired
// };

// LeadModalContainer.defaultProps = {
//   loading: false,
//   error: false,
//   success: false,
//   sendLeadModal: () => {}
// };

// const mapStateToProps = (state) => ({
//   loading: state.leadModalReducer.loading,
//   error: state.leadModalReducer.error,
//   success: state.leadModalReducer.success
// });

// const mapDispatchToProps = (dispatch) => ({
//   sendLeadModal: (bodyFormData) => dispatch(sendLeadModal(bodyFormData))
// });

// export default connect(
//   mapStateToProps, 
//   mapDispatchToProps
// )(LeadModalContainer);

export default LeadModalContainer;