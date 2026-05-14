// src/config.js

const config = {
  GET_TASKS_API_BASE_URL: process.env.REACT_APP_GET_TASKS_API_BASE_URL || 'http://20.207.119.187/api/get',
  DELETE_TASK_API_BASE_URL: process.env.REACT_APP_DELETE_TASK_API_BASE_URL || 'http://20.207.119.187/api/delete',
  CREATE_TASK_API_BASE_URL: process.env.REACT_APP_CREATE_TASK_API_BASE_URL || 'http://20.207.119.187/api/add',
};

export default config;
