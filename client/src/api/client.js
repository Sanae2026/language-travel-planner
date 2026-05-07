const API_URL = import.meta.env.VITE_API_URL;
export const getPhrases = async (language) => {
    const res = await fetch(`${API_URL}/phrases/${language}`);
    return res.json();
};
export const getQuiz = async (language) => {
    const res = await fetch(`${API_URL}/phrases/quiz/${language}`);
    return res.json();
};
