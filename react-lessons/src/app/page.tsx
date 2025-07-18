import Image from "next/image";
import Student from "./Components/Student";
import Classroom from "./Components/ClassroomDetails";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Muthulaxmi Muthukumar
      <Student id={1} name="Muthulaxmi M"/>
      <Classroom Standard={8} Section="C" MentorName="Rabiya"/>
    </div>
  );
}
