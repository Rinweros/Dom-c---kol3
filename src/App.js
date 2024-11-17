import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShoppingListDetail from './routes/ShoppingListDetail';
import ShoppingListOverview from './routes/ShoppingListOverview/ShoppingListOverview';


function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center">Nákupní seznamy</h1>
        <Routes>
          {/* Domovská stránka s přehledem nákupních seznamů */}
          <Route path="/" element={<ShoppingListOverview />} />
          
          {/* Detailní pohled na konkrétní nákupní seznam */}
          <Route path="/list/:id" element={<ShoppingListDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
