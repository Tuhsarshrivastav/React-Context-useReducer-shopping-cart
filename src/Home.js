import { CartState } from "./Context/Context";
const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(state);
  return <div className="home">
      
  </div>;
};

export default Home;
