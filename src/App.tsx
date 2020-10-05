import React from 'react';
import './App.css';
import { Button, Box, Grid, Nav } from 'grommet';
import { Home, Notification, ChatOption } from 'grommet-icons';

function App() {
  return (
    <div className="App">
      <Grid
        rows={['xsmall', ['small', 'large']]}
        columns={['1/3', '2/3']}
        fill="horizontal"
        gap="small"
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        <Nav gridArea="header" direction="row-reverse" background="brand" pad="small">
          <Button icon={<Home />} size="small" hoverIndicator />
          <Button icon={<Notification />} hoverIndicator />
          <Button icon={<ChatOption />} hoverIndicator />
          <header style={{size:'left'}}>Brandon's Blog</header>
        </Nav>
        <Box gridArea="nav" background="light-5" />
        <Box gridArea="main" background="light-2" />
      </Grid>
    </div>
  );
}

export default App;
