import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL as string;

export const login = async (userName: string, password: string) => {
    return await axios.post(
        API_URL,
        {
            query: `query login($userName: String!, $password: String!) {
                login(userName: $userName, password: $password)
              }`,
            variables: {
                userName: userName,
                password: password,
            },
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};

export const getUsers = async () => {
    return await axios.post(
        API_URL,
        {
            query: `query Users {
            users {
              id
              name
              userName
              todos {
                name
                status
                id
              }
            }
          }`,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};
