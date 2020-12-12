// employment
import acoustics from './employment/acoustics'
import employment from './employment/employment'
import engineering from './employment/engineering'
import trapit from './employment/trapit'
import vdgs from './employment/vdgs'
import twosimple from './employment/twosimple'

// projects
import chat from './projects/chat'
import chessrobot from './projects/chessrobot'
import housegenerator from './projects/housegenerator'
import noxive from './projects/noxive'
import owme from './projects/owme'
import projects from './projects/projects'

export default {
  // employment
  acoustics, employment, engineering, trapit, vdgs, twosimple,

  // projects
  chat, chessrobot, housegenerator, noxive, owme, projects, 

  about: `
    $h1 ABOUT

    Website created with React (2020).

    $b GitHub:
    $lnk https://github.com/felixxwu/felixwu.me

    Tip: the command input supports tab-completion and history!

    $hr
    $bcmd home
  `,
  home: `
    $h1 FELIX WU
    Software developer at 2Simple.
    
    $b Email:
    felixxwu@gmail.com
    $b CV:
    $lnk https://felixwu.me/cv.pdf
    $b GitHub:
    $lnk https://github.com/felixxwu
    $b LinkedIn:
    $lnk https://linkedin.com/in/felixxwu

    $hr
    $cmd employment
    $cmd projects
    $cmd education
    $cmd skills

    Type "help" or "?" for a list of available commands.
  `,
  education: `
    $h1 UNI>VER>SI>TY OF ED>IN>BURGH
    Computer Science BEng Hons (First)

    $b COURSES

    $b Year 4 - Average: First
    Software Design and Modelling,
    Music Informatics,
    Machine Learning Practical,
    Honours Project (Machine Learning),
    Data Mining and Exploration,
    Compiling Techniques

    $b Year 3 - Average: First
    Software Testing,
    Computer Security,
    Professional Issues,
    Introductory Applied Machine Learning,
    Large Practical (Android App),
    Operating Systems,
    System Design Project (Robotics Team Project)

    $b Year 2 - Average: 2.1
    Probability with Applications,
    Discrete Mathematics and Mathematical Resoning,
    Introduction to Software Engineering,
    Introduction to Computer Systems,
    Reasoning and Agents,
    Algorithms, Data Structures & Learning,
    Processing Formal and Natural Languages

    $b Year 1 - Average: 2.1
    Calculus and its Applications,
    Introduction to Linear Algebra,
    Cognitive Science,
    Data and Analysis,
    Object-Oriented Programming
    Functional Programming,
    Computation and Logic

    $b Detailed description of all courses:
    $lnk http://www.drps.ed.ac.uk/19-20/dpt/utcmpsi.htm

    $hr
    $bcmd home
  `,
  skills: `
    $h1 TECH>NI>CAL SKILLS

    $bcmd home

    $hr

    $b SPOKEN LANGUAGES:
    English: fluent
    German: fluent
    Cantonese: conversant

    $b MOST COMPETENT IN:
    Javascript (+ Vue, React, Node)
    Python
    Android (Java / Kotlin)
    Unity (C#)
    Machine Learning (PyTorch)
    
    $b LIMITED EXPERIENCE WITH:
    Matlab
    Haskell
    PHP
    C

    $hr
    $bcmd home
  `,
}