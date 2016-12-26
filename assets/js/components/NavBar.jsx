//@flow
'use strict';
import AppBar from 'react-toolbox/lib/app_bar';
import Link from 'react-toolbox/lib/link';

export default function NavBar(props: {onMenuClick?: Function}) {
  const link = (
    <Link href="/#/" style={{ opacity: 1, display: 'inherit'}}>SPYC Document</Link>
  );

  return (
    <AppBar leftIcon="menu" onLeftIconClick={props.onMenuClick || null} title={link} fixed flat/>
  );
}