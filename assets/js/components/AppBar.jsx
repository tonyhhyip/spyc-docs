//@flow
'use strict';
import AppBar from 'react-toolbox/lib/app_bar';
import Link from 'react-toolbox/lib/link';

export default function Bar() {
  const link = (
    <Link href="/#/" style={{ opacity: 1}}>SPYC Document</Link>
  );
  return (
    <AppBar title={link} fixed flat/>
  );
}