import React from 'react'
import './listReleasePage.css'

const ListReleasePage = () => {
  return (
    <section className='list-release'>
      <div className='title'>Список релизов</div>
      <ul className='release-list'>
        <li className='release-item'>
            <div className='item-title'>Neobuild</div>
            <div className='item-descriprion'>Тестовая релиз</div>
            <div className='item-status'>
                <div className='status-title'>Статус:</div>
                <div className='status error'>Слияние не завершено</div>
            </div>
        </li>
      </ul>
    </section>
  )
}

export default ListReleasePage
