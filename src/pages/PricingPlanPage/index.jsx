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

  // Adding Action
  useEffect((id) => {
    getSinglePrice(id);
  }, [id]);

  return (
    <Container>
      {
        !error && !loading && singlePrice.length ? (
          <>
            <Navbar />
            <HeaderPricingPlanPage {...props} />
            <PricingServiceCardsContainer {...props} />
              <NoticeBoard>
                {
                  singlePrice.map(({id, idx}) => (
                    <TextWrapper id={singlePrice.notices}>
                      <img src={IconHash} alt="icon-hash" />
                      <span>{singlePrice.notices}</span>
                    </TextWrapper>
                  ))
                }
              </NoticeBoard>
              <ImageCenter>
                <img src={ImageLoveCode} alt="loveCode" />
              </ImageCenter>
              <JoinITCommunitySection />
              <BtnBackWrapper to="/">
                <img src={IconBack} alt="back-btn" />
                back
              </BtnBackWrapper>
              <Footer />
          </>
        ) : (<Spinner />)
      }
    </Container>
  )
};

PricingPlanPage.PropTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  // singlePrice: PropTypes.object,
  getSinglePrice: PropTypes.func
};

PricingPlanPage.defaultProps = {
  loading: false,
  error: false,
  singlePrice: {},
  getSinglePrice: () => {}
};

const mapStateToProps = (state) => ({
  loading: state.singlePriceRedcuer.loading,
  error: state.singlePriceRedcuer.error,
  singlePrice: state.singlePriceRedcuer.singlePrice
});

const mapDispatchToProps = (dispatch) => ({
  getSinglePrice: (id) => dispatch(getSinglePrice(id))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PricingPlanPage);