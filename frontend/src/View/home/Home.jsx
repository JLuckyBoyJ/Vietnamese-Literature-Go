import Header from "../Header";
import Map from "../Map"
const Home = () => {
    function initMap() {
        const options = {
            zoom:8,
            center:{lat:42.3601,lng:-71.0589}
        };
        const map = new window.google.maps.Map(document.getElementById('map'), options);
    }
    return (
        <div>
            <Header/>
            <div>
                <Map/>
            </div>
        </div>
    );
}
export default Home;