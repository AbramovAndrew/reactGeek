import React from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

const posts = [
    {
        id: Math.floor(Math.random()*1000),
        title: 'Lorem ipsum.',
        subtitle: 'Lorem ipsum dolor sit amet.',
        author: 'Chris',
        createDate: new Date(Math.floor(Math.random() * Math.pow(10, 12) * 1.56)).toJSON(),
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam blanditiis cum cumque cupiditate dolor dolore dolorem eaque, earum eius fugiat illo inventore ipsam minima nisi nostrum odit officia omnis perspiciatis, placeat, quasi quos rem reprehenderit rerum soluta unde voluptatum. Accusamus consequatur dolorem doloribus ducimus magni, porro quos reprehenderit!'
    },
    {
        id: Math.floor(Math.random()*1000),
        title: 'Lorem ipsum 2.',
        subtitle: 'Lorem ipsum dolor sit amet.',
        author: 'Sue',
        createDate: new Date(Math.floor(Math.random() * Math.pow(10, 12) * 1.56)).toJSON(),
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ad, at aut consectetur dignissimos eos nam non nulla placeat provident quis repellendus sit suscipit? Adipisci blanditiis deleniti dolore et eveniet magni modi quas ut vel, voluptates? Commodi esse facere fugit illum impedit magnam natus sint, suscipit tenetur voluptate. Asperiores, similique!'
    },
    {
        id: Math.floor(Math.random()*1000),
        title: 'Lorem ipsum 3.',
        subtitle: 'Lorem ipsum dolor sit amet.',
        author: 'Aurora',
        createDate: new Date(Math.floor(Math.random() * Math.pow(10, 12) * 1.56)).toJSON(),
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corporis ipsum modi omnis sint soluta unde ut veniam veritatis voluptatum. Ad alias amet explicabo illum incidunt laboriosam magnam nihil officia optio, praesentium quis rem repellat sint? Dolor doloremque fuga modi quod ratione recusandae, suscipit voluptates! Assumenda earum magni numquam quia?'
    },
    {
        id: Math.floor(Math.random()*1000),
        title: 'Lorem ipsum 4.',
        subtitle: 'Lorem ipsum dolor sit amet.',
        author: 'Andrew',
        createDate: new Date(Math.floor(Math.random() * Math.pow(10, 12) * 1.56)).toJSON(),
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam aut autem consequuntur cupiditate dignissimos dolorem dolores dolorum ea eaque eius enim ex fugit hic id impedit ipsum laboriosam laudantium magni maxime minus molestias nam, natus necessitatibus nemo nihil perferendis perspiciatis porro quos ratione recusandae reiciendis saepe similique tenetur totam!'
    },
    {
        id: Math.floor(Math.random()*1000),
        title: 'Lorem ipsum 5.',
        subtitle: 'Lorem ipsum dolor sit amet.',
        author: 'Laura',
        createDate: new Date(Math.floor(Math.random() * Math.pow(10, 12) * 1.56)).toJSON(),
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam consequatur delectus facilis impedit natus nostrum numquam provident quo ratione. Asperiores ipsam iure modi neque officiis repellat sint? Deserunt dicta quibusdam sequi. A consequatur cumque dolor dolores enim est fugit, inventore iusto nisi nobis officia perferendis similique sit tempore ut?'
    }
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: true
        };
    }

    render() {
        return(
            <>
                <WelcomeModal show = {this.state.modal}/>
                <Blog posts = {posts} />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
