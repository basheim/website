import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
export default function App({ Component, pageProps }: any) {
  return (<React.Fragment>
    <CssBaseline />
    <Component {...pageProps} />
  </React.Fragment>);
}