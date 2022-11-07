import './BareAppPrepaidCheckout.scss';
import BareCheckoutForm from './components/BareCheckoutForm';

function BareAppPrepaidCheckout() {
  return (
    <>
      <div className="mainContainer">
        <img alt="Bare logo" src="assets/images/bare_logo.svg" />
        <BareCheckoutForm />
      </div>
    </>
  );
}

export default BareAppPrepaidCheckout;
