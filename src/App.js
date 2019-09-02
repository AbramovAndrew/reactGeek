import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./Menu";
import './app/styles/style.css';

class App extends React.Component {
    render() {
        const menuItems = [
            {href: "/", title: 'Главная'},
            {href: "/about", title: 'О нас'},
            {href: "/service", title: 'Услуги'},
            {href: "/contacts", title: 'Контакты'},
        ];

        return <div>
            <Menu items={menuItems} titleMenu='Главное меню'/>
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));