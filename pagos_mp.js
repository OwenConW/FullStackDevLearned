// https://docs.google.com/presentation/d/10I_NwrND6BuYxptn2pMnjj72_4Gp3Ke0FRrk0FB25Us/edit#slide=id.g119a3211a43_4_70

// COMANDO CREACION USUARIOS

// curl -X POST \
// -H "Content-Type: application/json" \
// -H 'Authorization: Bearer <ACCESS_TOKEN_TEST>' \
// "https://api.mercadopago.com/users/test_user" \
// -d '{"site_id":"MLA"}'



// PAGOS UNICOS (CARRITO)

// https://api.mercadopago.com/checkout/preferences    a esta url se le tiene q mandar el body con el header
// para generar links de pagos unicos

// headers:{
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${process.env.ACCES_TOKEN}`
// }


const body = {
    payer_email: "comprador@email.com",
    items: [ // array de objetos, cada 1 de los items representa un producto con precio, titulo, cantidad
        {    // por ejemplo,un carrito de compra con 10 items, tendria 10 objs
            title: "Dummy title",
            description: "Dummy description",
            picture_url: "http://www.myapp.com/myimage.jpg",
            category_id: "cat123",
            quantify: 1,
            unit_price: 10  // hay que aclarar que moneda usar
        }
    ],
    back_uls: {
        success: "https://www.success.com", // si la compra sale bien
        failure: "http://www.failure.com", // si la compra falla
        pending: "http://www.pending.com" // si hay un problema, o se paga en efectivo
    },
    notification_url: "https://www.your-site.com/ipn" // recibir notificaciones de mp (recomendado webhooks)
}

// En esta parte es en la que le mandamos la informacion a mercado pago y donde se falla


// SUSCRIPCIONES


// https://api.mercadopago.com/preapproval

// headers:{
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${process.env.ACCES_TOKEN}`
// }

const body = {
    reason: "Suscripcion de ejemplo",
    auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 10,
        currency_id: "ARS"
    },
    back_url: "https://yoursite.com.ar/success",
    player_email: "comprador@gmail.com.ar" // campo requeridisimo. ojo con los users de prueba y reales
}
// tmb se pueden agregar campos de inicio y fin de una suscripcion


// RUTAS

// TIENEN QUE SER UN POST


// PaymentController: 
class PaymentController {
    constructor(subscriptionService) {
      this.subscriptionService = subscriptionService;
    }
    // creamos una clase que tenga el constructor que recibe el servicio
    async getPaymentLink(req, res) {
        // ejecuamos la funcion que esta en el servicio "createPayment"
      try {
        const payment = await this.subscriptionService.createPayment();
  
        return res.json(payment);
      } catch (error) {
        console.log(error);
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create payment" });
      }
    }
  
    async getSubscriptionLink(req, res) {
      try {
          // ejecuamos la funcion que esta en el servicio "createSubscription"
        const subscription = await this.subscriptionService.createSubscription();
  
        return res.json(subscription);
      } catch (error) {
        console.log(error);
  
        return res
          .status(500)
          .json({ error: true, msg: "Failed to create subscription" });
      }
    }
  }
  
  module.exports = PaymentController;


  // PAYMENT SERVIXE


  const axios = require("axios");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_67073490@testuser.com",
      items: [
        {
          title: "Jordan 4 Black Cat",
          description: "Las mejores zapas",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: 500.000
        }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }

  async createSubscription() {
    const url = "https://api.mercadopago.com/preapproval";

    const body = {
      reason: "Job Hub Premium",
      auto_recurring: {
        frequency: 1,
        frequency_type: "year",
        transaction_amount: 4000,
        currency_id: "ARS"
      },
      back_url: "https://google.com.ar",
      payer_email: "test_user_67073490@testuser.com"
    };

    const subscription = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return subscription.data;
  }
}

module.exports = PaymentService;

// RUTAS


pagos.get("/", (req, res, next) => {
    return res.json({
        "/payment": "generates a payment link",
        "/suscription": "generates a suscription link"
    })
})

pagos.get("/payment", (req, res, next) => {
    PaymentInstance.getPaymentLink(req, res)
    // esto devuelve un JSON enorme en donde "init_piunt" es el link de pago que estabamos buscando, debemos devolverlo al
    // front para generar el pago
    // pero tmb nos mandan "sandbox_init_point" no hay que usarlo nunca, es viejo

})

pagos.get("/suscription", (req, res, next) => {
    PaymentInstance.getSubscriptionLink(req, res)
    // esto devuelve un JSON enorme en donde "init_point" es el link de pago que estabamos buscando, debemos devolverlo al
    // front para generar el pago
    // las subs tardan horas
})



// NOTIFICACIONES IPN O WEBHOOKS
// notification_url: "https://www.your-site.com/ipn"


//TARJETAS FAKE

// Mastercard	                5031 7557 3453 0604         	123	                11/25          
// Visa	                    4509 9535 6623 3704	            123	                11/25        
// American Express        	3711 803032 57522	            1234	            11/25       


// ESTADOS DE TARJETA


// APRO	Pago aprobado	DNI del usuario de prueba
// OTHE	Rechazado por error general	DNI del usuario de prueba
// CONT	Pendiente de pago	-
// CALL	Rechazado con validación para autorizar	-
// FUND	Rechazado por importe insuficiente	-
// SECU	Rechazado por código de seguridad inválido	-
// EXPI	Rechazado debido a un problema de fecha de vencimiento	-
// FORM	Rechazado debido a un error de formulario	-

// Preferencias de pago https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/checkout-customization/preferences