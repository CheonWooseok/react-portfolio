import axios from "axios";

const getGitRepo = async () => {
  let { data } = await axios.get(
    "https://api.github.com/users/CheonWooseok/repos",
    {
      headers: {
        Authorization: process.env.REACT_APP_GH_ACCESS_KEY,
      },
    }
  );
  if (!data || !data[0]) return "error";
  // console.log(data?.slice(1));
  return data?.slice(1)?.sort((a, b) => {
    if (new Date(a.created_at) > new Date(b.created_at)) return -1;
    else if (new Date(a.created_at) < new Date(b.created_at)) return 1;
    else return 0;
  });
};

export default getGitRepo;
