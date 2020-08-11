import React from 'react';

import { Container } from './styles';

import Navbar from '../../components/Navbar';
import HeaderArticle from '../../components/HeaderArticle';
import Article from '../../components/Article';
import Footer from '../../components/Footer';

const ArticlePage = () => {
  return (
    <Container>
      <Navbar />
      <HeaderArticle />
      <Article />
      <Footer />
    </Container>
  )
};

export default ArticlePage;