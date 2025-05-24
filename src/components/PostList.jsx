import UserProfile from './UserProfile'
import { useState } from 'react';
import { useEffect } from 'react';

export default function PostList () {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://dummyjson.com/comments');
                const data = await response.json();
                setComments(data.comments);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    
  return (
    <div className='flex flex-col gap-8'>
         {comments.map((comment) => (
            <UserProfile key={comment.id} name={comment.user.fullName} username={comment.user.username} content={comment.body} likes={comment.likes}/>
        ))}
    </div>
  );
}
