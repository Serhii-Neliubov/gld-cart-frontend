export interface IMessageData {
  name: string;
  email: string;
  subject: string;
  message: string;
  [value: string]: string
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
