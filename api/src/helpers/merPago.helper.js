import axios from "axios";

export async function subscriptionHelper(req, res){
    const url = "https://api.mercadopago.com/preapproval";

    let preference = {
        reason: "Suscripcion de supermercados",
		auto_recurring: {
            frequency: 1,
            frequency_type: "months",
            transaction_amount: 500,
            currency_id: "ARS"
        },
        back_url: "https://yoursite.com.ar/succes",
        payer_email: "test_user_55610397@testuser.com"
	};

    const subscription = await axios.post(url, preference, {
        "Content-Type":"application/json",
        Authorization: `Bearer ${process.env.MP_TOKEN}`
    })
    return subscription.data;
}
