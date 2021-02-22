import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import Navbar from '../components/Navbar';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<Navbar />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default MyApp;
