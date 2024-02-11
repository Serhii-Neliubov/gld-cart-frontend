export interface IMessageData {
    name: string;
    email: string;
    subject: string;
    message: string;
    [value: string]: string
}