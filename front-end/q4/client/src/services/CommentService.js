import * as api from '../apis';

class CommentService {
  static getComments(slug) {
    return new Promise(async (resolve, reject) => {
      try {
        // TODO: load comments from server
        const comments = [
          {
            id: 1,
            createdby: 'Wang Da',
            createdat: 'Aug 17, 2019',
            content: 'This is a mock comment.',
          }
        ];
        resolve({ comments });
      } catch (err) {
        reject(err);
      }
    });
  }

  static postComment(comment) {
    return new Promise(async (resolve, reject) => {
      try {
        // TODO: post comment to server
        const result = {};
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default CommentService;