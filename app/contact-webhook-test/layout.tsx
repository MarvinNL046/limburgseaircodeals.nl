import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webhook Test - Limburgse Airco Deals',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}