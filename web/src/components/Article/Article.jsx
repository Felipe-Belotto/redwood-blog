import { Link, routes } from "@redwoodjs/router";
import { truncate } from "src/lib/formatters";
import { formattedDate } from "../Comment";

const Article = ({ article, summary = false }) => {
  return (
    <article className="shadow-md rounded p-2 lg:p-4">
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? article.body  : truncate(article.body, 100)}
      </div>
      <div>
      <span className="ml-2 text-gray-400 font-normal">
            by {article.user.name}
          </span>
      <span className="ml-2 text-gray-400 font-normal">
            {formattedDate(article.createdAt)}
          </span>
      </div>
    </article>
  )
}

export default Article;