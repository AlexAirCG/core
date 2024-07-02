import { Button } from "@/components/ui/button";
import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <div className="flex flex-col items-center">
        <Image
          src="/assets/alex.jpg"
          alt="alexair"
          width={200}
          height={300}
          className="mb-3 rounded shadow-[12px_12px_16px_0px_#4a5568]"
        />
        <Button className="shadow-[12px_12px_16px_0px_#4a5568]">
          I love you
        </Button>
      </div>
      <CreateCourseForm revalidatePagePath="/" className="max-w-[300px] mb-5" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
