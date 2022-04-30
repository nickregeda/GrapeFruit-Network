import s from './Posts.module.css'
import Post from './Post/Post';
import React from "react";
import {Formik, Form, Field, ErrorMessage, validateYupSchema} from "formik";
import postFormSchema from "../../FormValidation/PostFormSchema";

const PostForm = (props) => {
    let maxPostTextLength = 3000;
    return (
        <Form className={s.post_field}>
            <label className={s.my_posts_label} htmlFor="newPost">My posts</label>
            <Field className={s.my_posts_textarea}
                   as={'textarea'}
                   maxLength={maxPostTextLength + 1} //for validation test
                   name={'newPost'}
                   placeholder='New post...'
            />
            <div className={s.under_field_flex_block}>
                <div className={s.count_n_error}>
                    <div className={s.symbol_count}>{props.newPost.length}/{maxPostTextLength}</div>
                    <ErrorMessage className={s.errorMes} name={'newPost'} component="div"/>
                </div>
                <button disabled={props.newPost.length > {maxPostTextLength} || !props.newPost}>
                    Send
                </button>
            </div>
        </Form>
    )
}

const Posts = (props) => {
    let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} date={post.date}
                                                      likesCount={post.likesCount}/>);

    let onAddPost = (newPost) => {
        props.addPost(newPost);
    }

    return (
        <div>
            <div>
                <Formik
                    initialValues={{newPost: ''}}
                    validationSchema={postFormSchema}
                    onSubmit={(values, {resetForm}) => {
                        onAddPost(values.newPost);
                        resetForm({newPost: ''});
                    }}
                >
                    {({values}) =>
                        <PostForm newPost={values.newPost}/>
                    }
                </Formik>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;