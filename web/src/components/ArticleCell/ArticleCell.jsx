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
    <section className="w-[500px] mt-16">
      <h1 style={{ fontSize: '24px' }}>{article.title}</h1>
      <p style={{ fontSize: '16px' }}>{article.body}</p>
      <aside className="py-8 flex flex-col gap-4">
      <h4 className="text-lg font-bold">Comentários</h4>
      <CommentsCell postId={article.id} />
      </aside>
    </section>

  );
};