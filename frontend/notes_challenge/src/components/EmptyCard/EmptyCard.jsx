const EmptyCard = () => {
  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
        <h4 className="text-2xl mb-7">No notes found</h4>
        <p className="text-sm text-center mt-4">
          You can create a new note by clicking the button below
        </p>
      </div>
    </div>
  );
};

export default EmptyCard;