import { formattedDate } from "../Comment";
import CommentForm from "../CommentForm/CommentForm";
import CommentsCell from "../CommentsCell";

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
      user {
        name
      }
    }
  }
`


export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ article }) => {
  if (!article) { // Check if article is undefined
    return <Loading />; // or any other placeholder you prefer
  }

  return (
    <section className="lg:min-w-[500px] flex flex-col gap-4">
      <h1 style={{ fontSize: '24px' }}>{article.title}</h1>
      <p style={{ fontSize: '16px' }}>{article.body}</p>
      <div className="flex justify-between text-sm p-2">
      <span className=" text-gray-400 font-normal">
            by {article.user.name}
          </span>
      <span className=" text-gray-400 font-normal">
            {formattedDate(article.createdAt)}
          </span>
      </div>
      <div className="mt-6 flex flex-col">
          <CommentForm postId={article.id} />
          <div className="mt-6">
            <CommentsCell postId={article.id} />
          </div>
        </div>
    </section>

  );
};