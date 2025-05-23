import UserProfile from './UserProfile'
import React from 'react';

type Comment = {
    id: number;
    body: string;
    likes: number;
    user: {
        fullName: string;
        username: string;
    };
};

export default function PostList() {
    const [comments, setComments] = React.useState<Comment[]>([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('https://dummyjson.com/comments',
                {
                    headers : {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = await response.json();
            setComments(data.comments);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

  return (
    <div className='flex flex-col gap-8'>
        {comments.map((comment) => (
            <UserProfile key={comment.id} name={comment.user.fullName} username={comment.user.username} content={comment.body} likes={comment.likes} />
        ))}
    </div>
  );
}
