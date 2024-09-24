import Provider from './Components/context/provider';
import Header from './Components/Header/Header';
import Iphones from './Components/Iphones/Iphone';
import Subtitle from './Components/subtitle/subtitle';


export default function App() {
  return (
    <Provider>
    <Header />
    <Subtitle />
    <Iphones />
    </Provider>
  )
}
