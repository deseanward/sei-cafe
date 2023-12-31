import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utils/users/users-service";

import "./App.css";
import NewOrderPage from "./pages/New-Order/new-order.page";
import AuthPage from "./pages/Auth/auth.page";
import OrderHistoryPage from "./pages/Order-History/order-history.page";
import Navbar from "./components/navbar/navbar.component";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className='App'>
      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders' element={<OrderHistoryPage />}></Route>
            <Route path='/orders/new' element={<NewOrderPage />}></Route>
            <Route></Route>
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
