import { Helmet } from "react-helmet";
import Banner from "../../Shared/Banner/Banner";
import Brands from "../../Shared/Brands/Brands";
import ChoosenUs from "../../Shared/ChoosenUs/ChoosenUs";
import Disclaimer from "../../Shared/Disclaimer/Disclaimer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>auto haven || Home</title>
            </Helmet>
            <Banner></Banner>
            <Brands></Brands>
            <ChoosenUs></ChoosenUs>
            <Disclaimer></Disclaimer>
        </div>
    );
};

export default Home;