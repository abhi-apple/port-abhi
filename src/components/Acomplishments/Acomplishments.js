import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Projects made'},
  { number: 1596, text: 'CODECHEF(MAX)', },
  { number: 95, text: 'JEE MAINS(percentile)', },
  { number: 27085, text: 'JEE ADVANCED(AIR)', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments </SectionTitle>
    {/* <Boxes >
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
    <Boxes >
        <Box >
          <BoxNum>20+</BoxNum>
          <BoxText>Projects Made</BoxText>
        </Box>
        <Box >
          <BoxNum>1596</BoxNum>
          <BoxText>CODECHEF(MAX)</BoxText>
        </Box>
        <Box >
          <BoxNum>95</BoxNum>
          <BoxText>JEE MAINS(percentile)</BoxText>
        </Box>
        <Box >
          <BoxNum>27085</BoxNum>
          <BoxText>JEE ADVANCED(AIR)</BoxText>
        </Box>

    </Boxes>


  </Section>
);

export default Acomplishments;
