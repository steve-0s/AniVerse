const ErrorState = ({ title = 'Something went wrong', message = 'Please refresh and try again.' }) => {
  return (
    <div className="rounded-xl border border-red-900/50 bg-red-950/20 p-6 text-center">
      <h3 className="text-lg font-bold text-red-300">{title}</h3>
      <p className="mt-2 text-sm text-red-200">{message}</p>
    </div>
  );
};

export default ErrorState;
