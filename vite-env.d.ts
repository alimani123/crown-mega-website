/// <reference types="vite/client" />

interface SafepayCheckoutOptions {
  env: 'production' | 'sandbox';
  clientKey: string;
  amount: number;
  currency: string;
  tracker: string;
  customerEmail: string;
  onSuccess: (data: unknown) => void;
  onDismiss: () => void;
}

interface SafepayCheckout {
  open: (options: SafepayCheckoutOptions) => void;
}

interface Safepay {
  Checkout: SafepayCheckout;
}

interface Window {
  Safepay?: Safepay;
}
