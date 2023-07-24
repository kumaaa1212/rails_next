import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/router"

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/v1/posts')
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  }
}

export default function Home({posts}:any) {
  const router = useRouter()
  const handleDelate = async (id:any) => {
  try{
    await axios.delete(`http://localhost:3000/api/v1/posts/${id}`)
    router.reload()
    // これだとリロードしないと消えない
    // だから見た目上のfilterを使う
  }
  catch(err){
    console.log(err)
  }
  }
  return (
    <>
    <div>
      <div>
        <Link href="/CreatePost">
          <button>New Post</button>
        </Link>
      </div>
      {posts.map((post:any) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content}</p>
          <Link href={`/Edit_Post/${post.id}`}>
          <button>Edit</button>
          </Link>
          <button onClick={() =>handleDelate(post.id)}>Delate</button>
        </div>
      ))}
    </div>
    </>
  )
}