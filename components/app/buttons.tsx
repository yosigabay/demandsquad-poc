import { TrashIcon } from "@heroicons/react/24/outline";

import { deleteProject } from "@/app/lib/actions";

export function DeleteProjectBtn({ id }: { id: string }) {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <form action={deleteProjectWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
