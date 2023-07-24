import React from 'react'

const Post = ({posts}:any) => {
  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.content}</p>
      <p>{posts.created_at}</p>
    </div>
  )
}

export default Post

export const getStaticProps = async ({params}:any) => {
  const res = await fetch(`http://localhost:3000/api/v1/posts/${params.id}`)
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/v1/posts')
  const data = await res.json()
  const paths = data.map((post:any) => {
    return {
      params: {id: post.id.toString()},
    }
  })
  return {
    paths,
    fallback: false,
  }
}