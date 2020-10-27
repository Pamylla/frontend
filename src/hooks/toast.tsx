import React, { createContext, useContext, useCallback, useState } from 'react';

import ToastContainer from "../components/ToastContainer";

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData></ToastContextData>({} as ToastContextData);
const [messages, setMessages] = useState<ToastMessage[]>([]);

const ToastProvider: React.FC = ({ children}) => {
  const addToast = useCallback((message) => {

  },[]);

  const removeToast = useCallback(() => {},[])
  return (
    <ToastContext.Provider value={{ addToast, removeToast}} >
      { children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context;
}

export { ToastProvider, useToast}
