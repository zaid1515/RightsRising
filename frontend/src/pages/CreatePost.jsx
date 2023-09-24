
// const CreatePost = () => {
//     return (
//         <div>CreatePost</div>
//     )
// }

// export default CreatePost
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import Editor from '../components/Editor';
import axios from 'axios';

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [file, setFile] = useState('');
    const [redirect, setRedirect] = useState(false);

    const createNewPost = async(ev) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('content', content);
        formData.append('file', file); // Append the file
        ev.preventDefault();

        console.log(`Data : ${formData}`);

        try{
            const res= await axios.post('/api/blogs/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the content type for FormData
                },
            });

        } catch(err){
            console.log(err);
            console.log(err.response)
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    
    return (
        <form onSubmit={createNewPost} encType="multipart/form-data">
        <input type="title"
                placeholder={'Title'}   
                value={title}
                onChange={ev => setTitle(ev.target.value)} />
        <input type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)} />
        <input type="file"
                onChange={ev => setFile(ev.target.files[0])} />

        <Editor value={content} onChange={setContent}/> 
        <button style={{marginTop:'5px'}}>Create post</button>

        </form>
    );
}
