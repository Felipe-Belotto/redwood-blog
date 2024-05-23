const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg border">
      <header className="flex justify-between">
        <h2 className="font-semibold text-gray-700 text-xs">{comment.name}</h2>
        <time className=" text-gray-500 text-xs" dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>
      </header>
      <p className="text-sm mt-2">{comment.body}</p>
    </div>
  )
}

export default Comment