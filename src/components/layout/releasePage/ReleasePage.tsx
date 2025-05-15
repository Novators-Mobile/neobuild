import React from 'react';
import './releasePage.css'
import CommitComparison from '../../screens/commitСomparison.tsx'
const ReleasePage = () => {
  return (
    <section className='release'>
          <div className='title'>
              Релиз
          </div>
          <div className="release-container">
            <d className='container-button'>
              <button className='release-button diff'>
                Diff коммитов
              </button>
              <button className='release-button tasks'>
                Задачи
              </button>
              <bu className='release-button transfer'>
                Перенос
              </bu>
          </div>
     < CommitComparison/>
      </section>
  )
}

export default ReleasePage
