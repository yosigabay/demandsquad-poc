import { TrashIcon } from "@heroicons/react/24/outline";

export function DeleteProjectBtn({ id }: { id: string }) {
  //const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form /*action={deleteInvoiceWithId}>*/>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
