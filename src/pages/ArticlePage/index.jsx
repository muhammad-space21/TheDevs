import React from 'react';

import { Container } from './styles';

import Navbar from '../../components/Navbar';
import HeaderArticle from '../../components/HeaderArticle';
import Article from '../../components/Article';

const ArticlePage = () => {
  return (
    <Container>
      <Navbar />
      <HeaderArticle />
      <Article />
    </Container>
  )
};

export default ArticlePage;