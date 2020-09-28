import React from 'react';
import {CardContent, Typography} from '@material-ui/core';
import ModalCard from '../../common/ModalCard/ModalCard';


const Instruction = ({text, message, button, handler}) => {

  return (
    <ModalCard message={message} button={button} handler={handler}>
      <CardContent>
        <Typography align="center">
          {text.phrase1}<span>{text.span1}</span>{text.phrase2}<span>{text.span2}</span>{text.phrase3}<span>{text.span3}</span>
        </Typography>
      </CardContent>
    </ModalCard>
  );
}

export default Instruction;