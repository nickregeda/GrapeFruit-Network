import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} date={post.date}
                                                      likesCount={post.likesCount}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div className={s.post_field}>
                <div>My posts</div>
                <textarea onChange={onPostChange} ref={newPostElement} placeholder='New post...'
                          value={props.newPostText}/>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;