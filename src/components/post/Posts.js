import React, { Component } from 'react';
import { connect } from 'react-redux';
import { POST_LIST_LOADED, POST_LIST_UNLOADED } from '../../actions';
import api from '../../utils/api';

class Posts extends Component {
    componentDidMount() {
        this.props.onLoad(Promise.resolve(api.Posts.getPosts()))
    }
    componentWillUnmount() {
        this.props.onUnload()
    }
    renderListPosts(){
        return this.props.listPosts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))
    }
    render() {
        let { listPosts } = this.props
        return(
            <ul>{listPosts && listPosts.length > 0 && (this.renderListPosts())}</ul>
        )
    }
}

const mapStateToProps = state => ({
    listPosts: state.posts.all
})
const mapDispatchToProps = dispatch => ({
    onLoad: payload => dispatch({ type: POST_LIST_LOADED, payload }),
    onUnload: () => dispatch({ type: POST_LIST_UNLOADED })
})
export default connect(mapStateToProps, mapDispatchToProps)(Posts)