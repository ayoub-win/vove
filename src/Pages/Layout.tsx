
import Sidebar from "./Sidebar";
import TableDemo  from "./Table";



function Layout() {
  return (
    <div className="grid  xl:grid-cols-6 ">
     <Sidebar />
     <main className="xl:col-span-5   ">
      <TableDemo />
     </main>
   </div>
  );  
}

export default Layout;