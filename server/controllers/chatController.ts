import { Request, Response, NextFunction } from "express";
import ChatService from "../services/chat-service";

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { text, sender, receiver } = req.body;
  try {
    const newMessage = await ChatService.createMessage(text, sender, receiver);
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const sender = req.params.user1Id;
  const receiver = req.params.user2Id;
  try {
    const messages = await ChatService.getAllMessages(sender, receiver);
    res.status(200).json({ messages: messages });
  } catch (error) {
    next(error);
  }
};

export const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Add your update logic here
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Add your delete logic here
  } catch (error) {
    next(error);
  }
};
