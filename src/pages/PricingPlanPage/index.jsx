import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  Container, 
  ImageCenter, 
  BtnBackWrapper, 
  NoticeBoard,
  TextWrapper 
} from './styles';

import { getSinglePrice } from '../../redux/modules/singlePrice/singlePriceAction';
import  { Text } from '../../containers/Languages';
// comp.
import Navbar from '../../components/Navbar';
import HeaderPricingPlanPage from '../../components/HeaderPricingPlanPage';
import PricingServiceCardsContainer from '../../containers/PricingServiceCardsContainer';
import JoinITCommunitySection from '../../components/JoinITCommunitySection';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner';

// img.
import IconBack from '../../assets/icons/back.btn.png';
import ImageLoveCode from '../../assets/illustrations/lovecode.png';
import IconHash from '../../assets/icons/hashtag.png';


const PricingPlanPage = ({
  loading,
  error,
  singlePrice,
  getSinglePrice
}) => {

  const {id} = useParams();
  console.log('id in pricing plan page', id)

  // Adding Action
  useEffect(() => {
    getSinglePrice(id);
  }, [id]);

  return (
    <Container>
      {
        !error && !loading && singlePrice ? (
          <>
            <Navbar />
            <HeaderPricingPlanPage />
            <PricingServiceCardsContainer />
              <NoticeBoard>
                {
                  !error && !loading && singlePrice.length ? (
                    singlePrice.map(({id, idx}) => (
                      <TextWrapper key={id}>
                        <img src={IconHash} alt="icon-hash" />
                        <span>{singlePrice.notices}</span>
                      </TextWrapper>
                    ))
                  ) : (<Spinner />)
                }
              </NoticeBoard>
              <ImageCenter>
                <img src={ImageLoveCode} alt="loveCode" />
              </ImageCenter>
              <JoinITCommunitySection />
              <BtnBackWrapper to="/">
                <img src={IconBack} alt="back-btn" />
                <Text tid="backText" />
              </BtnBackWrapper>
              <Footer />
          </>
        ) : (<Spinner />)
      }
    </Container>
  )
};

PricingPlanPage.propTypes = {
  singlePrice: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  getSinglePrice: PropTypes.func
};

PricingPlanPage.defaultProps = {
  singlePrice: {},
  loading: false,
  error: false,
  getSinglePrice: () => {}
};

const mapStateToProps = (state) => ({
  singlePrice: state.singlePriceReducer.singlePrice,
  loading: state.singlePriceReducer.loading,
  error: state.singlePriceReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  getSinglePrice: (id) => dispatch(getSinglePrice(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PricingPlanPage);