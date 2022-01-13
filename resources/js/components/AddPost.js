import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPost.css';
import { useNavigate } from "react-router-dom";

const AddPost = () => {

    const { register, handleSubmit, reset } = useForm();
    let navigate = useNavigate();
    const onSubmit = data => {
        axios.post('/post', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    console.log(data);
                    reset();
                }
            });

    }
    return (
        <div className="add-post">
            Add Post
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 20 })} placeholder="Title" />
                <textarea {...register("description")} placeholder="Description" />
                <input {...register("img")} placeholder="image" />
                <input type="submit" />
            </form>
        </div>
    );
};


export default AddPost;