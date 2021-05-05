import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
import OrderHistory from './../../components/OrderHistory/OrderHistory';
import './styles.scss';

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data
});

const Dashboard = props => {
  const dispatch = useDispatch();
  //set default orderHistory value matched to state of current user
  const { currentUser, orderHistory } = useSelector(mapState);

  //grab order history of logged-in user
  useEffect(() => {
    dispatch(
      getUserOrderHistory(currentUser.id)
    );

  }, []);

  return (
    <div>
      <h1>Order History</h1>
      <OrderHistory orders={orderHistory} />
    </div>
  );
};

export default Dashboard;
