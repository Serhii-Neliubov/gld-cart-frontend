export interface IMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
  value: string
}

export interface IClearClick {
  beauty: boolean;
  bags: boolean;
  awesome: boolean;
  mobileTablets: boolean;
  necklaces: boolean;
  clothing: boolean;
  bluetooth: boolean;
  facial: boolean;
  shoes: boolean;
  cpu: boolean;
  discover: boolean;
  headphones: boolean;
  bracelets: boolean;
  smartWatch: boolean;
  earrings: boolean;
  openbeauty: boolean;
  openbags: boolean;
  openawesome: boolean;
  openmobileTablets: boolean;
  opennecklaces: boolean;
  openclothing: boolean;
  openbluetooth: boolean;
  openfacial: boolean;
  openshoes: boolean;
  opencpu: boolean;
  opendiscover: boolean;
  openheadphones: boolean;
  openbracelets: boolean;
  opensmartWatch: boolean;
  openearrings: boolean;
}

// PaymentModal.tsx
export interface PaymentModalProps {
  title: string;
  secondInput?: string;
  secondInputTitle?: string;
}
// Label.tsx
export interface NavLinkProps {
  to: string;
  label: string;
}
