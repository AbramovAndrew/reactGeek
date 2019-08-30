import React from 'react';

export default class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.title}</a></li>;
        });

        return <div>
            <h2>{this.props.titleMenu}</h2>
            <ul>
                {items}
            </ul>
        </div>
    }
}