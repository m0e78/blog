import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

const Post = () => {
  return (
    <>
      <Link to='createpost'>Create a Post</Link><br />
      <Link to='postlist'>Post List</Link>
      <Outlet/>
      </>

      )
}

export default Post