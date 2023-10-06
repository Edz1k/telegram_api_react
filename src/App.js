import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';
import { SpeedDialButton } from './components/SpeedDialButton/SpeedDialButton';
// import { useTelegram } from './hooks/useTelegram';

const products = [
  {id: '1', title: "Helicopter#1", price: 350000000, description: "Летает, не бит не крашен", image: "https://mediarenditions.airbus.com/jHRgWZh9fKikrnNC_dRQo_65RBcD-1VlLItieIMvux8/resize?src=kpkp://airbus/38/533/533356-epox3366s0.jpg&w=480&h=480&t=fit"},
  {id: '2', title: "Helicopter#2", price: 450000000, description: "Летала девушка, один хозяин", image: "https://mediarenditions.airbus.com/jHRgWZh9fKikrnNC_dRQo_65RBcD-1VlLItieIMvux8/resize?src=kpkp://airbus/38/533/533356-epox3366s0.jpg&w=480&h=480&t=fit"},
  {id: '3', title: "Helicopter#3", price: 550000000, description: "Летал только в выходные", image: "https://mediarenditions.airbus.com/jHRgWZh9fKikrnNC_dRQo_65RBcD-1VlLItieIMvux8/resize?src=kpkp://airbus/38/533/533356-epox3366s0.jpg&w=480&h=480&t=fit"},
  {id: '4', title: "Helicopter#4", price: 650000000, description: "Заливали только ракетное топливо", image: "https://mediarenditions.airbus.com/jHRgWZh9fKikrnNC_dRQo_65RBcD-1VlLItieIMvux8/resize?src=kpkp://airbus/38/533/533356-epox3366s0.jpg&w=480&h=480&t=fit"},
  {id: '5', title: "Helicopter#5", price: 750000000, description: "Обмен на квартиру", image: "https://mediarenditions.airbus.com/jHRgWZh9fKikrnNC_dRQo_65RBcD-1VlLItieIMvux8/resize?src=kpkp://airbus/38/533/533356-epox3366s0.jpg&w=480&h=480&t=fit"},
  {id: '6', title: "Helicopter#6", price: 850000000, description: "Продам гараж, в подарок вертолет, торг, обмен, рассрочка, кредит, лизинг", image: "https://mediarenditions.airbus.com/jHRgWZh9fKikrnNC_dRQo_65RBcD-1VlLItieIMvux8/resize?src=kpkp://airbus/38/533/533356-epox3366s0.jpg&w=480&h=480&t=fit"},

]

function App() {

  // const { tg } = useTelegram()

  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header>Заголовок</Header>
      <Routes>
        <Route index element={<ProductList />}></Route>
        <Route path={'form'} element={<Form />}></Route>
      </Routes>
      <SpeedDialButton products={products}/>
    </div>
  );
}

export default App;
