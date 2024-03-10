import React from "react";
import MyButton from "./UI/button/MyButton";
import { Button } from '@mui/material';

const PostItem = function (props) {

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={ () => props.remove(props.post)} variant='Outlined'>
                    Удалить
                </Button>
            </div>
        </div>
    )
}

export default PostItem;