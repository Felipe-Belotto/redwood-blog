import { requireAuth } from 'src/lib/auth'
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
  requireAuth({ roles: ['moderator','admin'] })
  return db.comment.delete({
    where: { id },
  })
}

export const deleteCommentsByPostId = ({ postId }) => {
  requireAuth({ roles: 'moderator' })
  return db.comment.deleteMany({
    where: { postId },
  });
};



