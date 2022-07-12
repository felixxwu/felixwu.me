// employment
import acoustics from './employment/acoustics'
import employment from './employment/employment'
import engineering from './employment/engineering'
import trapit from './employment/trapit'
import vdgs from './employment/vdgs'
import twosimple from './employment/twosimple'
import aspectfs from './employment/aspectfs'

// projects
import chat from './projects/chat'
import chessrobot from './projects/chessrobot'
import noxive from './projects/noxive'
import projects from './projects/projects'
import superchess from './projects/superchess'
import dotsandmore from './projects/dotsandmore'
import globalstate from './projects/globalstate'

export default {
  // employment
  acoustics, employment, engineering, trapit, vdgs, twosimple, aspectfs,

  // projects
  chat, chessrobot, noxive, projects, superchess, dotsandmore, globalstate,

  about: `
    $h1 ABOUT

    Website created with React (2020).

    $b GitHub:
    $lnk https://github.com/felixxwu/felixwu.me

    $hr
    $b Navigation:
    $bcmd home
  `,
  home: `
    $h1 FELIX WU
    Software developer at 2Simple.
    
    $b Email:
    $email felixxwu@gmail.com
    $b CV:
    $lnk https://felixwu.me/cv.pdf
    $b GitHub:
    $lnk https://github.com/felixxwu
    $b LinkedIn:
    $lnk https://linkedin.com/in/felixxwu

    $b Navigation:
    $cmd employment
    $cmd projects
    $cmd education
    $cmd skills

    Type "help" or "?" for a list of available commands.
  `,
  education: `
    $h1 UNI>VER>SI>TY OF ED>IN>BURGH
    Computer Science BEng Hons (First)
    Top class prize for best performance in degree

    $b DISSERTATION

    Optimisations in deep learning methods for Jazz chord generation. Created a very capable model and a grade of 80%.
    $lnk https://drive.google.com/file/d/1tHMrPDalsnq9FjA-rvCfZ0f7pkl9bgHy/view

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
    $b Navigation:
    $bcmd home
  `,
  skills: `
    $h1 TECH>NI>CAL SKILLS

    $b SPOKEN LANGUAGES:
    English: fluent
    German: fluent
    Cantonese: rusty

    $b MOST COMPETENT IN:
    JavaScript
    TypeScript
    Vue
    React
    Unit and e2e testing
    HTML
    CSS
    Git
    
    $b LIMITED EXPERIENCE WITH:
    Python
    Java (+ Android / Kotlin)
    Unity (C#)
    Machine Learning (PyTorch)
    Matlab
    Haskell
    PHP
    C/C++

    $hr
    $b Navigation:
    $bcmd home
  `,
}