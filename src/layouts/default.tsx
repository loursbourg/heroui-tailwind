import { Card } from "@heroui/card";
import clsx from "clsx";

import Footer from "@/containers/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="w-full py-xxlg flex justify-center">
        <Card
          className={clsx(
            "test-app-card",
            "!rounded-card-radius pt-[52px] w-[468px] px-[40px]",
          )}
          shadow="none"
        >
          {children}
        </Card>
      </main>
      <Footer />
    </div>
  );
}
