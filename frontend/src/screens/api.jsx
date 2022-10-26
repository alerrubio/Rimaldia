export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Primer comentario",
      username: "Francisca Sueño",
      userId: "1",
      parentId: null,
      createdAt: "2022-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Segundo comentario",
      username: "Hernán Gutierrez",
      userId: "2",
      parentId: null,
      createdAt: "2022-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "hijo del primer comentario",
      username: "Hernán Gutierrez",
      userId: "2",
      parentId: "1",
      createdAt: "2022-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Hijo del segundo comentario",
      username: "Juan González",
      userId: "3",
      parentId: "2",
      createdAt: "2022-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Francisca Sueño",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
