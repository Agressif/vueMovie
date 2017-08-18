import jsonp from 'jsonp';

export default function getData(target) {
  const url = `https://api.douban.com/v2/${target}`;
  return new Promise((resolve, reject) => {
    jsonp(url, null, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}
