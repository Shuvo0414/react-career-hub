import Banner from "../Banner/Banner";
import CategoryList from "../CategoryLists/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
