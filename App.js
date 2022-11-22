import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native"
import { NavigationContainer } from "@react-navigation/native"
import AntDesign from "./components/AntDesign";
import FontAwesome from "./components/FontAwesome";
import Fontisto from "./components/Fontisto";

const Menu = createBottomTabNavigator().Navigator;
const ItenMenu = createBottomTabNavigator().Screen;

export default function App() {
  return (  
    <NavigationContainer>
      <Menu>
        <ItenMenu name="AntDesign" component={AntDesign}/>
        <ItenMenu name="FontAwesome" component={FontAwesome}/>
        <ItenMenu name="Fontisto" component={Fontisto}/>
      </Menu>
    </NavigationContainer>
  );
}