import React from 'react'
import styled from "styled-components"


const SkillTabsContainer = styled.div`
    max-width: 500px;
    overflow-wrap: anywhere;
`

export const SkillTab = styled.span`
    background: var(--primary-color);
    padding: 0.2rem 0.8rem;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
    white-space: nowrap;
    user-select: none;
    transition: all 0.3s ease-in-out;
    line-height: 2rem;
    &:hover {
        background: var(--primary-color-alt);
    }
`


export const SkillTabs: React.FC<{ skills: string }> = ({ skills }) => {
  const formattedSkills = skills.split('.')
    .filter(a => !!a.length)
    .map(skill => {
      const [title = '', skillString = ''] = skill.split(":");
      const skills = skillString.split(',').map(a => a.trim())

      return { title: title.trim(), skills }
    })

  return (
    <SkillTabsContainer className="mt-6 my-6">
      {formattedSkills?.map(category => <div key={category.title} className="text-sm mb-6">
        <h5 className="text-gray-600 mb-2">{category.title}</h5>
        <div>
          {category.skills.map(skill => <SkillTab key={skill}>{skill}</SkillTab>)}
        </div>
      </div>)}
    </SkillTabsContainer>
  );
}