import React, {Component} from 'react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.items
        };
        this.myRef = React.createRef();
    }

    addUser() {
        console.log(this);
    }

    render() {
        const users = this.state.users.map((user, index) => {
            return <li key={index}>{user}</li>
        });

        return (
            <div>
                <ul>
                    {users}
                </ul>
                <label>
                    Введите имя пользователя: <input ref={this.myRef} type="text" placeholder="Имя" />
                </label>
                <button onClick={this.addUser}>Добавить пользователя</button>
            </div>
        );
    }
}

export default Users;