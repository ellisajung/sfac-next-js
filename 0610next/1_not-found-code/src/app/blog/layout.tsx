import React from "react";

export const metadata = {
  title: "Blog",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
