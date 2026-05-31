import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { createTheme, CSSVariablesResolver, MantineProvider } from '@mantine/core';
import { Routes, Route } from 'react-router';
import { MathJaxContext } from 'better-react-mathjax';

import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Coursework from './pages/Coursework';

import SuperCDMS from './projects/SuperCDMS';
import EntityResolution from './projects/EntityResolution';
import Balatro from './projects/Balatro';
import BDCH from './projects/BDCH';
import Maistro from './projects/Maistro';
import ExamPref from './projects/ExamPref';
import PitchPred from './projects/PitchPred';
import ParentInvolve from './projects/ParentInvolve';
import Mkpis from './projects/Mkpis';
import Transit from './projects/Transit';
import Resume from './pages/Resume';



const theme = createTheme({});

const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {},
  dark: {
    '--mantine-color-text': theme.white,
  },
});

function App() {

  return (
    <MathJaxContext>
      <MantineProvider defaultColorScheme='light' theme={theme} cssVariablesResolver={resolver}>
        <Header />
        <Routes>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/supercdms" element={<SuperCDMS />} />
          <Route path="/projects/entity-resolution-patient-records" element={<EntityResolution />} />
          <Route path="/projects/balatro-simulation" element={<Balatro />} />
          <Route path="/projects/big-data-challenges-healthcare" element={<BDCH />} />
          <Route path="/projects/maistro" element={<Maistro />} />
          <Route path="/projects/exam-preferences" element={<ExamPref />} />
          <Route path="/projects/pitch-prediction" element={<PitchPred />} />
          <Route path="/projects/parent-involvement" element={<ParentInvolve />} />
          <Route path="/projects/mkpis" element={<Mkpis />} />
          <Route path="/projects/rapid-transit" element={<Transit />} />

          <Route path="/coursework" element={<Coursework />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </MantineProvider>
    </MathJaxContext>
  )
}

export default App
