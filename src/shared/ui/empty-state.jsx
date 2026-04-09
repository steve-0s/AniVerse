const EmptyState = ({ title = 'No results yet', message = 'Try a different filter or search term.' }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-6 text-center">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{message}</p>
    </div>
  );
};

export default EmptyState;
