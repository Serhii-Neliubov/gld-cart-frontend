import orderPlaced from '@assets/images/order-tick.svg';
import orderReady from '@assets/images/order-ready.svg';
import orderOnTheWay from '@assets/images/order-on-the-way.svg';
import orderDelivered from '@assets/images/order-delivered.svg';

export const trackOrderData = [
  {
    status: "Order Placed",
    text: "Thank you ,your order has been successfully placed.",
    img: orderPlaced,
  },
  {
    status: "Ready",
    text: `Your order is prepared and ready for pickup at our store. The delivery personnel will collect it within a few hours.`,
    img: orderReady,
  },
  {
    status: "On The Way",
    text: "Your order is on its way to your location. The delivery personnel will be delivering it to you shortly.",
    img: orderOnTheWay,
  },
  {
    status: "Delivered",
    text: "Your order is on its way to your location. The delivery personnel will be delivering it to you shortly.",
    img: orderDelivered,
  },
];
