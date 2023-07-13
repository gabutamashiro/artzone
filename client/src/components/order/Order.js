import { useCallback, useContext, useEffect, useState } from "react";
import Header from "../common/Header";
import SideBar from '../common/SideBar';
import Context from '../../context';
import axios from "axios";
import ProductDetail from "./ProductDetail";

const Order = (props) => {
	const params = props.match.params;

	const [orderProduct, setOrderProduct] = useState(null);

	const {user, setIsLoading} = useContext(Context);

	const [paymentMethod, setPaymentMethod] = useState(null);

	let loadOrderProduct = null;

	useEffect(() => {
		loadOrderProduct();
	}, [loadOrderProduct]);

	loadOrderProduct = useCallback(async () => {
		const orderProductId = params.id;
		if (!orderProductId) {
			return;
		}
		try {
			setIsLoading(true);
			const url = `http://localhost:8080/products/${orderProductId}`;
			const response = await axios.get(url);
			if (response && response.data && response.data.message) {
				alert(response.data.message);
				setIsLoading(false);
				return;
			} else {
				setOrderProduct(response.data[0]);
				setIsLoading(false);
			}
		} catch (error) {
			setIsLoading(false);
		}
	}, [setIsLoading, params]);

	const sendOrder = async () => {
		const sellerId = orderProduct.product_created_by;
		const customerId = user.id;
		const productId = orderProduct.id;
		const productPrice = orderProduct.product_price
		try {
			setIsLoading(true);
		  const orderData = {
				seller_id: sellerId,
				customer_id: customerId,
				product_id: productId,
				product_price: productPrice,
				payment_method: paymentMethod,
		  };
		  const url = 'http://localhost:8080/orders';
		  const response = await axios.post(url, orderData);
		  setIsLoading(false);
		} catch (error) {
		  setIsLoading(false);
		}
	};

	const setPaymentOption = (e) => {
    setPaymentMethod(e.target.value)
  };

	return (
		<div>
			<div id="header">
				<Header />
			</div>
			<div id="sidebarHome">
				<SideBar/>
				<div className="order">
					<ProductDetail product={orderProduct}/>
					<div className="payment-detail">
						<h2>Pagamento</h2>
						<div className="payment-options" onChange={e => setPaymentOption(e)}>
							<input type="radio" id="opcao1" name="payment_option" value="opcao1"></input>
							<label for="opcao1">opcao1</label>
							<input type="radio" id="opcao2" name="payment_option" value="opcao2"></input>
							<label for="opcao2">opcao2</label>
						</div>
					</div>
					<div onClick={sendOrder}>Finalizar Compra</div>
				</div>
			</div>
		</div>
	);
};

export default Order;