import MainScreen from "../components/MainScreen";
import SideBar from "../components/SideBar";

const Menu = function(){
      
    return (
        <div className="main">
            <SideBar/>
            <MainScreen/>
        </div>
    );
}

export default Menu