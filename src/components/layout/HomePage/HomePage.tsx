import logo from '../../../../public/icon/novators-icon.svg'
import './homePage.css'
import React, { useState } from 'react';

export default function HomePage () {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Обработчик изменения значений в input
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для авторизации (например, отправка данных на сервер)
    console.log('Email:', email);
    console.log('Password:', password);
  };

    return (
        <div className='home-page'>
            <div className="novators-logo">
                <img src={logo} />
                <p className='novators-title'>neobuild.com</p>
            </div>
            <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="email">Юзернейм или основная почта</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder = 'Введите текст'
                  onChange={handleEmailChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder = 'Введите текст'
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-group password">
                <label htmlFor="
remember">Запомнить пароль</label>
                <input
                  type="checkbox"
                  id="password"
                  value={password}
                  placeholder = 'Введите текст'
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit" className="btn">Войти</button>
            </form>
          </div>
        </div>
        
    )
}