import React from 'react';
import { DiFirebase, DiReact, DiCode , DiCodeBadge,DiCodeigniter,DiCoffeescript,DiCodepen,DiJava,DiCreativecommonsBadge} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <br/>
    <br/>
    <SectionTitle>Technical,Non Technical Skills</SectionTitle>
    <SectionText>I have worked on many projects on many languages like react, node, and also into competative Programming using c++ , java </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front end</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js, Node.js, Html,JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size='3rem'/>
        <ListContainer>
          <ListTitle>Programming Skills</ListTitle>
          <ListParagraph>
            Experience with <br/>
            C++,Java,Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size='3rem'/>
        <ListContainer>
          <ListTitle>Competative programming </ListTitle>
          <ListParagraph>
            Good at <br/>
            Problem Solving, Logical thinking. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodepen size='3rem'/>
        <ListContainer>
          <ListTitle>Creativity</ListTitle>
          <ListParagraph>
            Made few   <br/>
             creative projects in childhood. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCoffeescript size='3rem'/>
        <ListContainer>
          <ListTitle>Communication</ListTitle>
          <ListParagraph>
            Languages-  <br/>
             English, Hindi, Telugu.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
