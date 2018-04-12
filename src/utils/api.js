import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3001';

const responseBody = res => res.body;

const applicationJson = req => {
    req.set('Authorization', `whatever-you-want`);
    req.set('Accept', `application/json`);
    req.set('Content-Type', `application/json`);
}

const requests = {
    get: url => superagent.get(`${API_ROOT}${url}`).use(applicationJson).then(responseBody),
    del: url => superagent.del(`${API_ROOT}${url}`).use(applicationJson).then(responseBody),  
    post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).use(applicationJson).then(responseBody),
    put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).use(applicationJson).then(responseBody)
};

const Posts = {
    getPosts: () => requests.get('/posts'),
};

const Categories = {
    getCategories: () => requests.get(`/categories`),
}

export default {
  Posts,
  Categories,
};
