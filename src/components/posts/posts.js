import React, { Component } from 'react'

import Search from './search'
import PostsList from './list-of-posts'
import Header from './header'

class Posts extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <PostsList />
            </div>
        )
    }
}

export default Posts;
