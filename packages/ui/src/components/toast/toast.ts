import { toast as reactHotToast } from 'react-hot-toast';

export interface ToastOptions {
  duration?: number;
}

type ToastHandler = (message: string, options?: ToastOptions) => string;

interface ToastFunction {
  error: ToastHandler;
  success: ToastHandler;
  loading: ToastHandler;
  dismiss(toastId: string): void;
}

export const toast = reactHotToast as ToastFunction;
