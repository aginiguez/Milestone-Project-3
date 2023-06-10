import React from 'react';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element= {<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
