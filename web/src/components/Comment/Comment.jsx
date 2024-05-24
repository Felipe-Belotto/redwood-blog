import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const DELETE = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      postId
    }
  }
`

export const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  const { hasRole } = useAuth()
  const [deleteComment] = useMutation(DELETE, {
    refetchQueries: [
      {
        query: CommentsQuery,
        variables: { postId: comment.postId },
      },
    ],
  })

  const moderate = () => {
    if (confirm('Are you sure?')) {
      deleteComment({
        variables: { id: comment.id },
      })
    }
  }

  return (
    <div className="bg-slate-50 border p-4 rounded-lg flex flex-col">
      <header className="flex justify-between">
        <h2 className="font-semibold text-gray-700 text-sm">{comment.name}</h2>

        <div className='flex gap-4 items-center'>

        <time className="text-xs text-gray-500" dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>

      {hasRole(['moderator', 'admin'  ]) && (
        <button
          type="button"
          onClick={moderate}
          className="flex bottom-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1"
        >
          Delete
        </button>
      )}
</div>
      </header>
      <p className="text-sm mt-2 flex flex-wrap ">
        {comment.body}
        </p>

    </div>
  )
}

export default Comment