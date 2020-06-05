import React from 'react';
import {CardContent, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ModalCard from '../../common/ModalCard/ModalCard';

const useStyles = makeStyles(theme => ({


}));

const Instruction = ({message, button, handler}) => {
  const classes = useStyles();

  return (
    <ModalCard message={message} button={button} handler={handler}>
      <CardContent>
        <Typography align="center">
          Quiz składa się z <span>10 różnych utworów</span>  które wygrywały konkurs piosenki Eurowizji na przestrzeni lat. Po odsłuchaniu <span>10 sekundowego</span> fragmentu wykonania piosenki należy wskazać prawidłową odpowiedź. Rodzaj pytania zależy od wybranego poziomu trudności i pozostaje taki sam dla wszystkich 10 fragmentów. Dodatkowo można wybrać zakres edycji konkursu z których utwory mają znaleźć się w zestawieniu pytań. Zakres powinien obejmować przynajmniej okres <span>20 lat</span>
        </Typography>
      </CardContent>
    </ModalCard>
  );
}

export default Instruction;