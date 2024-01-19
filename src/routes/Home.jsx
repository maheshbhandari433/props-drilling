import { Typography } from "@mui/material";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
/* import { getData } from "../services/apiRequests"; */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDataRedux } from "../store/dataSlice";

/* const data = await getData(url);  */



const Home = () => {
  const dispatch = useDispatch(url);
  const {data} = useSelector((state) => state.data);
  console.log('data:', data);
  useEffect(() => {
    if(data === undefined) dispatch(getDataRedux(url))
  }, [data, dispatch]);

  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA data={data} />
    </div>
  );
};

export default Home;
