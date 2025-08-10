import { bodyAttributes } from "@zero-ui/attributes"

import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body {...bodyAttributes}>{children}</body>
    </html>
  )
}
