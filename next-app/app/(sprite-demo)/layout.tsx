import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="p-10">{children}</main>
}

export default layout
