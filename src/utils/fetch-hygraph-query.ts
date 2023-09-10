export const fetchHygraphQuery = async (query: string) => {

  const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 60 * 60 * 1, // 1 hora
    },
  });

  const { data } = await response.json();

  return data;
};
