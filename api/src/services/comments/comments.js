import { db } from 'src/lib/db'

export const comments = ({ postId }) => {
  return db.comment.findMany({ where: { postId } })
}

export const createComment = ({ input }) => {
  return db.comment.create({
    data: input,
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}