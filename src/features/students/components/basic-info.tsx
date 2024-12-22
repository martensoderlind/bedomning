import { StudentType } from "@/features/types";
import { BackgroundAvatar } from "./background-avatar";

type Props = {
  student: StudentType;
};

export function BackgroundBasicInfo({ student }: Props) {
  return (
    <section className="flex justify-between w-full">
      <div className="flex gap-6 items-center justify-between">
        <BackgroundAvatar />
        <div>
          <h2>{student.name}</h2>
        </div>
      </div>
    </section>
  );
}
