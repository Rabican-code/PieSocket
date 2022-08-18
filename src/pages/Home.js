import Navbar from "../components/Navbar"
import Content from "../components/Content"
import Brands from "../components/Brands"
import Middle from "../components/Middle"
import Tutorials from "../components/Tutorials"
import BottomLinks from "../components/BottomLinks"
import Footer from "../components/Footer"
import "./Home.css"
import Reviews from "../components/Reviews"

const Home = () => {
  return (
    <>
      <Navbar />
      <Content />
      <Brands /> 
      <Middle />
      <Reviews />
      <Tutorials />
      <BottomLinks />
      <Footer /> 
    </>
  )
};

export default Home;