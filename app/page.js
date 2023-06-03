'use client';
import { AppLayout } from "./AppLayout.js";
import { Content } from "../nav/Content.js"

export default function App() {
  const collapseItems = [
    "Features",
    "Customers",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback"
  ];

  return (
    <AppLayout>
      <Content />
    </AppLayout>
  )
}
