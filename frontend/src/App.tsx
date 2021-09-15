import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import TableBody from "components/TableBody";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Ol4 Mundo!</h1>
        <DataTable />
        <TableBody />
      </div>
      <Footer />
    </>
  );
}

export default App;
