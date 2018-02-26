export default class Helpers {
  static isArray(target) {
    return (Array.isArray(target) || target instanceof Array);
  }

  // Based on http://eddmann.com/posts/promisifying-error-first-asynchronous-callbacks-in-javascript/
  static promisify(asyncFn, ...args) {
    return new Promise((result, reject) => {
      asyncFn(...args, (err, res) => {
        if (err) reject(err);
        else result(res);
      })
    });
  }
}