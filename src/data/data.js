import uoe from './cards/education/uoe'
import skills from './cards/education/skills'

import soe from './cards/work/soe'
import trapit from './cards/work/trapit'
import vdgs from './cards/work/vdgs'
import acoustics from './cards/work/acoustics'
import hyped from './cards/work/hyped'
import chess from './cards/work/chess'

import noxive from './cards/projects/noxive'
import flatapp from './cards/projects/flatapp'
import owme from './cards/projects/owme'
import house from './cards/projects/house'
import chord from './cards/projects/chord'
import sudoku from './cards/projects/sudoku'
import alarm from './cards/projects/alarm'
import ultrasound from './cards/projects/ultrasound'
import chat from './cards/projects/chat'

export default {
  bio: `Fourth year Computer Science student at The University of Edinburgh.`,
  categories: [
    {
      name: "Education & Skills",
      cards: [
        uoe,
        skills
      ]
    },
    {
      name: "Work & Experience",
      cards: [
        soe,
        chess,
        trapit,
        vdgs,
        hyped,
        acoustics,
      ]
    },
    {
      name: "Projects",
      cards: [
        noxive,
        flatapp,
        owme,
        alarm,
        house,
        chord,
        sudoku,
        ultrasound,
        chat
      ]
    },
  ]
}