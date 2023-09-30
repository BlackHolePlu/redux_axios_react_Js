import './App.css';
import React,{ useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchData} from "./redux/action";

function App() {
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  if (loading) {
    return <div> Loading...</div>
  }

  if (error) {
    return <div><span>Error occurred:</span> <span>{error}</span></div>
  }
  return (
    <div className="App">
      {data.map((item)=> (
          <div key={item.id}> {item.title}</div>
      ))}
    </div>
  );
}

export default App;
