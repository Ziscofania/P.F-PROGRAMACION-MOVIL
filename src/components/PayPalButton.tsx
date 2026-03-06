import { useEffect, useRef } from "react";

declare global {
interface Window {
paypal:any;
}
}

const PayPalButton = ({total}:any)=>{

const paypalRef = useRef<HTMLDivElement>(null);

useEffect(()=>{

window.paypal.Buttons({

createOrder: function(data:any,actions:any){

return actions.order.create({

purchase_units:[{
amount:{
value: total
}
}]

});

},

onApprove:function(data:any,actions:any){

return actions.order.capture().then(function(details:any){

alert("Pago completado");

});

}

}).render(paypalRef.current);

},[]);

return <div ref={paypalRef}></div>;

};

export default PayPalButton;