import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle,SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
const projectdemo=[{
  title: 'Project1',
  space: '      ',
  description:'this is really long long for a projects'
},{
  title: 'Project2 ',
  space: '      ',
  description:'this is really long long for a projects'
},{
  title: 'Project3',
  space: '      ',
  description:'this is really long long for a projects'
},{
  title: 'Project4',
  space: '      ',
  description:'this is really long long for a projects'
},]
const Projects = () => (
  <Section nopadding id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id,video,title,description,tags,source,image,visit})=>(
        <BlogCard key={id} className="">
          {/* <video width='100%'  autoPlay loop>
            <source src={video} type = "video/mp4" />
          </video> */}
          <img width='100%' src={image}></img>
          <TitleContent>
            <HeaderThree title> {title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent></TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks  href={visit} target="_blank"> Code</ExternalLinks>
            <ExternalLinks href={source} target="_blank"> Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      )
      )
      }
    </GridContainer>
  </Section>
);

export default Projects;