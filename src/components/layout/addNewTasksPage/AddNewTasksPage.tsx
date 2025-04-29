import React, { useState } from 'react'
import './addNewTasksPage.css'

const AddNewTasksPage = () => {
  const [branchName, setBranchName] = useState('');
  const [listName, setListName] = useState('Название списка');
  const [selectedBranch, setSelectedBranch] = useState('');
  const branches = ['Ветка 1', 'Ветка 2', 'Ветка 3'];
  const handleCreateBranch = () => {
    console.log('Создание ветки с параметрами:', {
      listName,
      branchName
    });
    // Здесь будет логика создания ветки
  };

  const handleReturnToBuild = () => {
    // Здесь будет логика возврата к сборке проекта
    console.log('Возврат к сборке проекта');
  };

  return (
    <section className='create-branch'>
        <div className='title'>
            Добавить новую задачу в релиз
        </div>
        <div className="branch-container">
          <div className="branch-section">
            <h3 className="section-title">Релизная ветка</h3>
            <input
              type="text"
              // value={branchName}
              // onChange={(e) => setBranchName(e.target.value)}
              className="branch-input"
              placeholder="Введите текст"
            />
          </div>
          <div className="branch-section">
            <h3 className="section-title">Название задачи</h3>
            <input
              type="text"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              className="branch-input"
              placeholder="Введите текст"
            />
          </div>
          <div className="button-group">
            <button onClick={handleCreateBranch} className="button create-merge">
              Создать Merge Request
            </button>
            <button onClick={handleCreateBranch} className="button create-task">
              Добавить задачу
            </button>
            <button onClick={handleReturnToBuild} className="button return-btn">
              Отменить
            </button>
          </div>
        </div>
    </section>
  )
}

export default AddNewTasksPage
