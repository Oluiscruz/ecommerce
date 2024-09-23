import Computadores from './Components/computadores/Pc';
import Header from './Components/Header/Header';
import Iphones from './Components/Iphones/Iphone';
import Subtitle2 from './Components/subtitle 2/subtitle2';
import Subtitle from './Components/subtitle/subtitle';


export default function App() {
  return (
    <div className="div">
    <Header />
    <Subtitle />
    <Iphones />
    <Subtitle2 />
    <Computadores />
    </div>
  )
}
