import { useCallback, useContext, useEffect, useState } from "react";
import Header from "../common/Header";
import SideBar from '../common/SideBar';
import Context from '../../context';
import axios from "axios";

const OrderResume = (props) => {
  const orderId = props.match.params.id

  const {setIsLoading} = useContext(Context);

  const [order, setOrder] = useState(null);

  let loadOrder = null;

  useEffect(() => {
    if (orderId){
      loadOrder()
    }
	}, [loadOrder, orderId])

  loadOrder = useCallback(async () => {
    try {
      setIsLoading(true);
      const url = `http://localhost:8080/orders/${orderId}`;
      const response = await axios.get(url);
      setOrder(() => response.data[0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
	}, [setIsLoading, orderId])

  return (
    <div>
      <div id="header">
        <Header/>
      </div>
      <div id="sidebarHome">
        <SideBar/>
        <div className="order-resume">
          <h2>Pedido concluído!</h2>
          <div className="order-resume__infos">
            <h3>Informações Do Pedido</h3>
            <div className="order-resume__data">
              <span>ID: {order?.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderResume;