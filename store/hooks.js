import { useSelector, useDispatch } from "react-redux";

// Custom hooks for better TypeScript support and cleaner code
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

// Add your custom hooks here as needed
// Example:
// export const useAuth = () => useAppSelector((state) => state.auth);
// export const useUser = () => useAppSelector((state) => state.user);
