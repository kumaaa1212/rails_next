import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'

const CreatePost = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const router = useRouter()
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const post = {
      title,
      content,
    }
    try{
      await axios.post('http://localhost:3000/api/v1/posts', post)
      router.push('/')
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>ブログ新規登録</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>タイトル</label>
        <input type="text" onChange={(e):any => setTitle(e.target.value)} />
        <label htmlFor="">本文</label>
        <textarea name="" onChange={(e):any =>setContent(e.target.value)} />
        <button type='submit'>投稿</button>
      </form>
    </div>
  )
}

export default CreatePost