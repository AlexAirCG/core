import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/alex.jpg"
          alt="alexair"
          width={200}
          height={300}
          className="mb-3 rounded shadow-[12px_12px_16px_0px_#4a5568]"
        />
        <Button className="shadow-[12px_12px_16px_0px_#4a5568]">I love</Button>
      </div>
    </main>
  );
}
