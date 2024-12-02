import React from 'react'
import { AboutMe } from './Modals/AboutMe'
import { Education } from './Modals/Education'
import { Work } from './Modals/Work'
import { Skills } from './Modals/Skills'
import './app.scss'

export const App = () => (
  <div className="main-wrapper">
    <AboutMe />
    <Education />
    <Work />
    <Skills />
  </div>
)
