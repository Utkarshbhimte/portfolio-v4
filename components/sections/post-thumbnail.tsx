import React from 'react'
import { config } from '../../config'
import { Post } from '../../types/blog'

interface PostThumbnailProps {
  post: Post;
}
const PostThumbnail: React.FC<PostThumbnailProps> = ({ post }) => {
  return (
    <div>
      {post.coverImage && <img src={post.coverImage} className="rounded-lg w-full h-64 object-cover mb-4" alt="" />}
      <h4 className="text-xl font-medium mb-4">{post.title}</h4>
      <p className="text-gray-600 line-clamped text-sm">{post.brief}</p>
      <a target="_blank" rel="noopener noreferrer" href={`${config.blogHost}/${post.slug}`}>Read more</a>
    </div>
  )
}

export default PostThumbnail
