// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";

// Import Redux, PersistGate, and Store
import { ReduxProvider } from "./redux-provider";
import { ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toastify styles

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dash Boards",
  description: "Installers DashBoards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ReduxProvider>{children}
        <ToastContainer  position="top-center" 
        autoClose={3000}
        hideProgressBar={false} 
        newestOnTop={true}
        closeOnClick
        rtl={false} 
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide} />
      </ReduxProvider>
      </body>
    </html>
  );
}
