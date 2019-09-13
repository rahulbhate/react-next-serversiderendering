import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../src/Layout';
import { makeStore } from '../redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Container>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Container>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // we can dispatch from here too
  ctx.store.dispatch({ type: 'FOO', payload: 'foo' });
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withRedux(makeStore)(MyApp);
