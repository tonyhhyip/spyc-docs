//@flow
'use strict';

import React from 'react';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

export default function NotFound() {
  return (
    <div>
      <Card style={{marginTop: '8rem'}}>
        <CardTitle title="Not Found"/>
        <CardText>
          Page you are looking for does not exists.
          Please check if you have the correct URI.
        </CardText>
        <CardActions>
          <Button label="Back to home page" href="./#/" />
        </CardActions>
      </Card>
    </div>
  );
}