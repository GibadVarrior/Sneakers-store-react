import { useState, useEffect } from 'react';
import Card from './components/card';
import Drawer from './components/drawer';
import Header from './components/header';

function App() {
	const [items, setItems] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [cartOpened, setCartOpened] = useState(false);

	useEffect(() => {
		fetch('https://620540d5161670001741b6e7.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	const onAddToCart = (obj) => {
		setCartItems((prev) => [...prev, obj]);
	};

	return (
		<div className="wrapper clear">
			{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}

			<Header onClickCart={() => setCartOpened(true)} />
			<div className="content  p-40">
				<div className="d-flex align-center justify-between mb-40">
					<h1>Все кроссовки</h1>
					<div className="search-block d-flex">
						<img src="/img/seacrh-icon.svg" alt="Search" />
						<input type="text" placeholder="Поиск..." />
					</div>
				</div>

				<div className="d-flex flex-wrap">
					{items.map((item) => (
						<Card
							title={item.title}
							price={item.price}
							imageUrl={item.imageUrl}
							onFavorite={() => console.log('Добавили в закладки')}
							onPlus={(obj) => onAddToCart(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
