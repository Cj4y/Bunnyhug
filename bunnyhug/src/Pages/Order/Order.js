import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//TODO test
import { getOrderDetailsStart } from './../../redux/Orders/orders.actions';
import OrderDetails from './../../components/OrderDetails/OrderDetails';

//grab data from redux store
const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails
});

const Order = () => {
  //dispatcher of action
  const dispatch = useDispatch();
  const { orderID } = useParams();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;

  //dispatch action from orders.action
  useEffect(() => {
      dispatch(
        getOrderDetailsStart(orderID)
      );
  }, []);

  return (
    <div>
      <h1>
        Order ID: #{orderID}
      </h1>

      <OrderDetails order={orderDetails} />

      <h3>
        Total: {orderTotal}
      </h3>

    </div>
  )
}

export default Order;