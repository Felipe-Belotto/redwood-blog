import CommentForm from "../CommentForm/CommentForm";
import CommentsCell from "../CommentsCell";

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
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
    <section className="lg:w-[500px] lg:mt-16">
      <h1 style={{ fontSize: '24px' }}>{article.title}</h1>
      <p style={{ fontSize: '16px' }}>{article.body}</p>
      <div className="mt-6 lg:mt-12">
          <CommentForm postId={article.id} />
          <div className="mt-6 lg:mt-12">
            <CommentsCell postId={article.id} />
          </div>
        </div>
    </section>

  );
};