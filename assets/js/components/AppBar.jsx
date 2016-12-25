//@flow
'use strict';
import AppBar from 'react-toolbox/lib/app_bar';
import {IconButton} from 'react-toolbox/lib/button';

export default function Bar() {
  const button = (
    <IconButton icon="home" href="/#/" style={{ color: 'white'}}/>
  );
  return (
    <AppBar title="SPYC Document" leftIcon={button} fixed flat/>
  );
}