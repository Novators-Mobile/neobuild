import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/layout/HomePage/HomePage.tsx';
import ListReleasePage from './components/layout/listReleasePage/ListReleasePage.tsx';
import BuildingProjectPage from './components/layout/buildingProjectPage/BuildingProjectPage.tsx';
import AddNewTasksPage from './components/layout/addNewTasksPage/AddNewTasksPage.tsx';
import CreateReleasePage from './components/layout/createReleasePage/CreateReleasePage.tsx';
import ReleasePage from './components/layout/releasePage/ReleasePage.tsx';
import './index.css'

createRoot(document.querySelector('body')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-releases" element={<ListReleasePage />} />
        <Route path="/building-project" element={<BuildingProjectPage />} />
        <Route path="/create-branch" element={< CreateReleasePage />} />
        <Route path="/add-tasks" element={< AddNewTasksPage />} />
        <Route path="/release" element={< ReleasePage />} />
      </Routes>
    </Router>
  </StrictMode>
)