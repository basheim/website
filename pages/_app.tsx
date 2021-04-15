import React from 'react';
import '../styles/global.css';
import CssBaseline from '@material-ui/core/CssBaseline';
export default function App({ Component, pageProps }: any) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (<React.Fragment>
    <CssBaseline />
    <Component {...pageProps} />
  </React.Fragment>);
}