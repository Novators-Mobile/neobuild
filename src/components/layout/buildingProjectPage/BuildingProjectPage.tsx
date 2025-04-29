import React, { useState } from 'react';
import './buildingProjectPage.css'

const BuildingProjectPage = () => {
    const [projectName, setProjectName] = useState('Название проекта');
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedReleaseTask, setSelectedReleaseTask] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [skipPipeline, setSkipPipeline] = useState(false);

  const projects = ['Проект 1', 'Проект 2', 'Проект 3'];
  const releaseTasks = ['Релизная задача 1', 'Релизная задача 2', 'Релизная задача 3'];
  const branches = ['Ветка 1', 'Ветка 2', 'Ветка 3'];

  const handleBuild = () => {
    console.log('Сборка проекта с параметрами:', {
      projectName,
      selectedProject,
      selectedReleaseTask,
      selectedBranch,
      skipPipeline
    });
    // Здесь будет логика сборки
  };

  const handleCancel = () => {
    setSelectedProject('');
    setSelectedReleaseTask('');
    setSelectedBranch('');
    setSkipPipeline(false);
  };
  return (
    <section className='building-project'>
        <div className='title'>
            Сборка проекта
        </div>
        <div className='building-project'>
        <div className="form-group">
        <label>Проект</label>
        <select 
          value={selectedProject} 
          onChange={(e) => setSelectedProject(e.target.value)}
          className="form-control"
        >
          <option value="">Выберите проект</option>
          {projects.map((project, index) => (
            <option key={index} value={project}>{project}</option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label>Релизная задача</label>
        <select 
          value={selectedReleaseTask} 
          onChange={(e) => setSelectedReleaseTask(e.target.value)}
          className="form-control"
        >
          <option value="">Выберите релизную задачу</option>
          {releaseTasks.map((task, index) => (
            <option key={index} value={task}>{task}</option>
          ))}
        </select>
      </div>
      
      <div className="form-group">
        <label>Ветка</label>
        <select 
          value={selectedBranch} 
          onChange={(e) => setSelectedBranch(e.target.value)}
          className="form-control"
        >
          <option value="">Выберите ветку</option>
          {branches.map((branch, index) => (
            <option key={index} value={branch}>{branch}</option>
          ))}
        </select>
      </div>
      
      <div className="checkbox-group">
        <label>
          <input 
            type="checkbox" 
            checked={skipPipeline} 
            onChange={(e) => setSkipPipeline(e.target.checked)} 
          />
          Пропустить пайплайн
        </label>
      </div>
      
      <div className="button-group">
        <button onClick={handleBuild} className="button build-btn">Собрать проект</button>
        <button onClick={handleCancel} className="button cancel-btn">Отменить</button>
      </div>
        </div>
    </section>
  )
}

export default BuildingProjectPage
