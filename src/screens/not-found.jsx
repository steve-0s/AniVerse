import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 p-6 text-white">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-wider text-red-300">404</p>
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="text-sm text-gray-300">That route does not exist in this build.</p>
        <Link to="/home" className="inline-block rounded-md bg-red-800 px-4 py-2 text-sm font-semibold">
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
