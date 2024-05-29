import { CreateProjectBtn } from "@/components/app/buttons";

export default async function Home() {
  return (
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      {/*<Search placeholder="Search projects..." />*/}
      <CreateProjectBtn />
    </div>
  );
}
