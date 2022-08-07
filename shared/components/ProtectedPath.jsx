import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
export default function ProtectedPath({ children }) {
  const { isAuth } = useSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!isAuth) {
      router.push("/login");
    }
  }, []);

  return <>{isAuth ? children : null}</>;
}
