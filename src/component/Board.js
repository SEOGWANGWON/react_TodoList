import React ,{useState, useEffect} from 'react';

function Board(){

    // 로컬 스토리지에 저장된 게시글 불러오기 || 없다면 빈 배열 가지고오기
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

    // 게시글 목록 관리
    const [posts, setPosts] = useState(savedPosts);

    // 새로운 게시글 입력받기
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    // 게시글 추가 함수
    const addPost = () => {
        setPosts([...posts, newPost]);
        setNewPost('');

        // 입력한 게시글 로컬 스트리지에 저장
        // 'posts' 키에 현재 게시글 목록과 새로운 게시글을 추가한 배열을 
        // JSON 문자열로 변환해서 저장
        localStorage.setItem('posts', JSON.stringify([...posts, newPost]))
    }

    // 게시글 삭제하기
    const deletePost = (index) => {
        const removePost = [...posts];
        removePost.splice(index,1); // 삭제하는 게시글부터 1개의 게시물을 삭제
        setPosts(removePost);
        localStorage.setItem('posts', JSON.stringify(removePost));
    }

    return(
        <div>
            <h1>게시판</h1>
            <div>
                <textarea
                rows="4"
                cols="50"
                    placeholder="게시글을 입력하세요."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                >   
                </textarea>
                <br/>
                <button onClick={addPost}>게시글 추가</button>
            </div>
            <div>
                <h2>게시글 목록</h2>
                <ul>
                    {posts.map((post,index) =>(
                        <li key={index}>{post}<button onClick={() => deletePost(index)}>삭제하기</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )


}

export default Board;