import { hideLoading, showLoading } from '@/store/loading';
import { Router } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import Loading from '../common/Loading';
import Modal from '../common/Modal';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const dispatch = useDispatch();
  Router.events.on('routeChangeStart', () => dispatch(showLoading()));
  Router.events.on('routeChangeComplete', () => dispatch(hideLoading()));
  Router.events.on('routeChangeError', () => dispatch(hideLoading()));

  return (
    <Container>
      <Header />
      <Navbar />
      <Main>{children}</Main>
      <Footer />
      <Modal />
      <Loading />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
`;
