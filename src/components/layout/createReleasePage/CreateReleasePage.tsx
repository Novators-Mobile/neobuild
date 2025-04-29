import React, {useState} from 'react'
import './createReleasePage.css'

const CreateReleasePage = () => {
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
              Создание релизной ветки
          </div>
          <div className="branch-container">
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
            <div className="branch-section">
              <h3 className="section-title">Название ветки</h3>
              <input
                type="text"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                className="branch-input"
                placeholder="Введите текст"
              />
            </div>
            <div className="button-group">
              <button onClick={handleCreateBranch} className="button create-btn">
                Создать релизную ветку
              </button>
              <button onClick={handleReturnToBuild} className="button return-btn">
                Вернуться к сборке проекта
              </button>
            </div>
          </div>
      </section>
    )
}

export default CreateReleasePage
