"use client";
import { useEffect } from "react";

export default function Redirect() {
  useEffect(() => {
    window.location.replace("https://wibe.so");
  }, []);
  return null;
}
