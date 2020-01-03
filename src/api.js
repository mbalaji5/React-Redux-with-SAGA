export const fetchPosts = async () => {
  const getdata = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await getdata.json();
  return data;
};
