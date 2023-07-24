import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

const EditPost = ({posts}:any) => {
  const [title, setTitle] = React.useState(posts.title)
  const [content, setContent] = React.useState(posts.content)
  const router = useRouter()
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const post = {
      title,
      content,
    }
    try{
      await axios.put(`http://localhost:3000/api/v1/posts/${posts.id}`, post)
      router.push('/')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>ブログの編集</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input type="text" value={title} onChange={(e):any => setTitle(e.target.value)} />
        <label htmlFor="" >本文</label>
        <textarea name="" value={content} onChange={(e):any =>setContent(e.target.value)} />
        <button type='submit'>編集</button>
      </form>
    </div>
  )
}

export default EditPost

export const getServerSideProps = async (context:any) => {
  const id = context.params.id
  const res = await fetch(`http://localhost:3000/api/v1/posts/${id}`)
  const data = await res.json()
  return {
    props: {
      posts: data,
    }
  }
}