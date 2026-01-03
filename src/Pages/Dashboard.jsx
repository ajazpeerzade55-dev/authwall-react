import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);


  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>

        <p className="mb-4">
          Welcome <span className="font-medium">{user.email}</span>
        </p>

      </div>
    </div>
  );

}
export default Dashboard;

