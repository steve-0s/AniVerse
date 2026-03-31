const PageContainer = ({ title, subtitle, children }) => {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="mb-6 mt-2">
            {title && <h1 className="text-left text-3xl sm:text-4xl">{title}</h1>}
            {subtitle && <p className="mt-2 text-sm text-gray-300">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </main>
  );
};

export default PageContainer;
