import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL as string;

export const getTodos = async (userId: string) => {
    const res = await getTodosAxios(userId);
    if (res.data?.data?.todosByUserId) {
        return { status: 'success', data: res.data.data.todosByUserId };
    } else {
        return { status: 'error', error: res.data?.errors?.[0]?.message || 'something went wrong!' };
    }
};

const getTodosAxios = async (userId: string) => {
    return await axios.post(
        API_URL,
        {
            query: `query TodosByUserId($userId: String!) {
                todosByUserId(userId: $userId) {
                  id
                  name
                  status
                }
              }`,
            variables: {
                userId: userId,
            },
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
};
