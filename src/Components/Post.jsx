import { Link } from 'react-router-dom'

const Post = ({post}) => {
  return (
    <article className='border-b border-gray-300 pb-2'>
      <Link to={`/post/${post.id}`}>
                <h2 className='font-medium hover:underline'>{post.title}</h2>
                <p className='text-[12px] mb-2'>{post.datetime}</p>
            </Link>
            <p>{(post.body).length >= 25 ? (post.body).slice(0,25) + "..." : post.body }</p>
    </article>
  )
}

export default Post
