import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from './libs/client'

export const PostDetail = () => {
    const [post, setPost] = useState();
    const { id } = useParams();

    useEffect(() =>{
        client.get({ endpoint: "blog", contentId: id})
        .then((res) => setPost(res))
        .catch((err) => console.error(err));
    }, []);

    if (!post) return <div>Loading....</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: post.body }}></p>
        </div>
    )
}

export default PostDetail;