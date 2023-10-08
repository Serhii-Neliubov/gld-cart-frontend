const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const calculateOrderAmount = (items) => {
  return 1400;
};
module.exports.create_payment_intent = async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
