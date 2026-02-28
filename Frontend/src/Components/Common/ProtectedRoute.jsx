import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API_BASE_URL from "../api/api";

export default function ProtectedRoute({ children, role }) {
  const [authStatus, setAuthStatus] = useState("loading");
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(
          `${API_BASE_URL}/api/auth/profile`, // ✅ USES API_BASE_URL
          {
            method: "GET",
            credentials: "include", // send cookie
          }
        );

        const data = await res.json();

        if (res.ok) {
          setUserRole(data.role);
          setAuthStatus("authorized");
        } else {
          setAuthStatus("unauth");
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setAuthStatus("unauth");
      }
    }

    checkAuth();
  }, []);

  if (authStatus === "loading") return <div>Loading...</div>;

  if (authStatus === "unauth") return <Navigate to="/login" replace />;

  if (role && userRole !== role) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
