import { useState } from "react";
import "./App.css";
 
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MasterBarang from "./pages/MasterBarang.jsx";
 
function App() {
  const [halamanAktif, setHalamanAktif] = useState("dashboard");
 
  return (
<>
<Navbar
        halamanAktif={halamanAktif}
        setHalamanAktif={setHalamanAktif}
      />
 
      {halamanAktif === "dashboard" && (
<Dashboard judul="Pusat Grosir Depot Air Minum Gundaling" />
      )}
 
      {halamanAktif === "barang" && <MasterBarang />}
 
      <Footer />
</>
  );
}
 
export default App;