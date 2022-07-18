import { withCoalescedInvoke } from "next/dist/lib/coalesced-function";
import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log({
            "title":title,
            "content":content
        });

        setContent('');
        setTitle('');
    }

    return (
        <div>
            <h1>Add a post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Title
                    <hr></hr>
                <input type="text" value={title} onChange={({target}) => setTitle(target.value)} />
                </div>
                <div>
                    Write your post here:
                    <hr></hr>
                    <textarea value={content} onChange={({target}) => setContent(target.value)}></textarea>
                </div>
                <button type="submit">Make blog post!</button>
            </form>
        </div>
    )
}

export default CreatePost;