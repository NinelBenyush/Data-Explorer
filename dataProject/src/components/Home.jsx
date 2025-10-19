export default function Home() {
  const handleGetData = () => {
    alert("Fetching your data...");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-hidden relative">
        <div className="fixed inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 20% 50%, rgba(200, 200, 200, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(220, 220, 220, 0.15) 0%, transparent 50%)",
            }}
          />
        </div>

        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 text-center px-10 py-16 max-w-3xl animate-fade-in">
          <style>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
        `}</style>

          <div className="text-sm text-gray-500 tracking-widest mb-12 font-medium">
            DASHBOARD
          </div>

          <h1
            className="text-7xl text-gray-900 mb-6 font-light"
            style={{ letterSpacing: "-3px" }}
          >
            Analyze Your Data
          </h1>

          <p className="text-xl text-gray-500 mb-16 font-light tracking-wide">
            One click. Instant insights. Complete control.
          </p>

          <button
            onClick={handleGetData}
            className="relative px-12 py-5 text-lg font-medium text-white bg-gray-900 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-2xl active:translate-y-0"
            style={{ letterSpacing: "0.5px" }}
          >
            Get Your Data
          </button>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl mb-3 opacity-60 grayscale">⚡</div>
              <div className="text-gray-600 text-sm tracking-wide">
                Real-time Processing
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl mb-3 opacity-60 grayscale">📊</div>
              <div className="text-gray-600 text-sm tracking-wide">
                Smart Analytics
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-3xl mb-3 opacity-60 grayscale">🔒</div>
              <div className="text-gray-600 text-sm tracking-wide">
                Secure & Private
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
