import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Components/Header';
import PostList from '../Components/PostList';
import '../styles/App.css';
import PostForm from '../Components/PostForm';
import PostFilter from '../Components/PostFilter';
import MyModal from '../Components/MyModal/MyModal';

import { Button } from '@mui/material';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';



function Blog() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);



  const pagesArray = useMemo(() => {
    let pagesArray = [];
    for (let i = 0; i < limit; i++) {
      pagesArray.push(i + 1);
    } return pagesArray;
  }, [page])

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  async function fetchPosts() {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    setTotalCount(response.headers['x-total-count'])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <div className='.Header'>
        <Header />
      </div>
      <Button style={{ marginTop: 30 }} onClick={() => { setModal(true) }} variant='contained'>
        Создать пост
      </Button>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />


      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список 1" />

      <div style={{ margin: 30 }}>
        {pagesArray.map(p =>
          <Button onClick={() => setPage(p)}
          >
            {p}
          </Button>

        )}</div>

    </div>
  );
}

export default Blog;
