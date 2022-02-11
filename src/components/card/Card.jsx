import { useState } from 'react';

import styles from './Card.module.scss';

const Card = ({ title, price, imageUrl, onPlus, onFavorite }) => {
	const [isAdded, setIsAdded] = useState(false);

	const onClickPlus = () => {
		setIsAdded(!isAdded);
		onPlus({ title, price, imageUrl });
	};

	return (
		<div className={styles.card}>
			<div className={styles.favorite} onClick={onFavorite}>
				<img src="/img/hearth-not-activ.svg" alt="bot-activ-button" />
			</div>
			<img width={133} height={112} src={imageUrl} alt="Sneakers" />
			<h5>{title}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column ">
					<span>Цена:</span>
					<b>{price}</b>
				</div>
				<img
					className={styles.plus}
					src={isAdded ? '/img/btn-checked.svg' : '/img/btn-unchecked.svg'}
					alt="checked"
					onClick={onClickPlus}
				/>
			</div>
		</div>
	);
};

export default Card;
