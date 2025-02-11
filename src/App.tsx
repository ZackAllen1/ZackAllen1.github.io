import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { createTheme, CSSVariablesResolver, MantineProvider, virtualColor } from '@mantine/core';
import { Routes, Route } from 'react-router';
import { MathJaxContext } from 'better-react-mathjax';

import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Coursework from './pages/Coursework';

import Maistro from './projects/Maistro';
import ExamPref from './projects/ExamPref';
import PitchPred from './projects/PitchPred';
import ParentInvolve from './projects/ParentInvolve';
import Mkpis from './projects/Mkpis';
import Transit from './projects/Transit';
import Resume from './pages/Resume';

const theme = createTheme({
  colors: {
    'maistro': [
      "#f3f7f2",
      "#e7ece5",
      "#cbd8c6",
      "#adc4a5",
      "#93b288",
      "#82a775",
      "#7aa26b",
      "#678d5a",
      "#5b7e4f",
      "#4c6d40"
    ],
  },
});

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
      <MantineProvider defaultColorScheme='auto' theme={theme} cssVariablesResolver={resolver}>
        <Header />
        <Routes>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
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
