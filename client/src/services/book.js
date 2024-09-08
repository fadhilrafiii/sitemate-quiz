import service from ".";

export const getBooks = async () => {
  const response = await service.get('/book');

  return response.data;
}

export const getBookDetail = async (id) => {
  const response = await service.get(`/book/${id}`);

  return response.data;
}

export const deleteBook = async (id) => {
  const response = await service.delete(`/book/${id}`);

  return response.data;
}

export const createBook = async (data) => {
  const response = await service.post('/book', data);

  return response.data;
}

export const updateBook = async (id, data) => {
  const response = await service.put(`/book/${id}`, data);

  return response.data;
}