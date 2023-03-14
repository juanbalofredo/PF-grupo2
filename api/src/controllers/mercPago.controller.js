import mercadopago from "mercadopago";

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-6855367691697925-030817-8621a90b766c6fbe43a243575f2241f2-1326325722",
});


export function payment(req, res) {

	let preference = {
		items: [
			{
        title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity)
			}
		],
		back_urls: {
			"success": "http://localhost:8080/feedback",
			"failure": "http://localhost:8080/feedback",
			"pending": "http://localhost:8080/feedback"
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
};

export function feedback(req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
};



// // https://api.mercadopago.com/preapproval 