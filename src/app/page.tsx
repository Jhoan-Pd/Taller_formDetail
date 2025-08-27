export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-gray-200">
      <section className="p-6 bg-white rounded-2xl shadow-2xl w-[420px]">
        
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-xl font-bold text-black">Appearance</h1>
          <p className="text-base text-gray-400">
            Set or customize your preferences for the system
          </p>
        </header>

        <hr className="my-4 border-gray-400" />

        {/* Language */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-sm font-medium text-gray-700">Language</h2>
            <p className="text-sm text-gray-400">
              Select the language of the platform
            </p>
          </div>
          <select
            id="language"
            className="ml-4 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
        </div>

        <hr className="my-4 border-gray-400" />

        {/* Interface theme */}
        <fieldset className="mb-6">
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            Interface theme
          </legend>
          <p className="text-sm text-gray-400 mb-3">
            Customize your application appearance
          </p>
          <div className="flex gap-3">
            {["Auto", "Light", "Dark"].map((theme) => (
              <label
                key={theme}
                className={`flex-1 rounded-lg border-2 cursor-pointer overflow-hidden ${
                  theme === "Light"
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  className="hidden"
                  defaultChecked={theme === "Light"}
                />
                <div className="p-4">
                  <div className="h-10 w-full rounded-md bg-gradient-to-r from-gray-100 to-gray-300 mb-2"></div>
                  <p className="text-center text-sm text-gray-700">{theme}</p>
                </div>
              </label>
            ))}
          </div>
        </fieldset>

        <hr className="my-4 border-gray-200" />

        {/* Accent color */}
        <fieldset className="mb-6">
          <legend className="block text-sm font-medium text-gray-700 mb-2">
            Accent color
          </legend>
          <p className="text-sm text-gray-400 mb-3">
            Pick your platform’s main color
          </p>
          <ul className="flex gap-3">
            {["red-500", "yellow-400", "green-500", "blue-500", "purple-500"].map(
              (color) => (
                <li key={color}>
                  <label>
                    <input
                      type="radio"
                      name="accent"
                      className="hidden"
                      defaultChecked={color === "purple-500"}
                    />
                    <span
                      className={`block w-7 h-7 rounded-full border-2 ${
                        color === "purple-500"
                          ? "border-gray-700"
                          : "border-gray-200"
                      } bg-${color}`}
                    ></span>
                  </label>
                </li>
              )
            )}
          </ul>
        </fieldset>

        <hr className="my-4 border-gray-200" />

        {/* Toggles */}
        <section className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Reduce motion</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Auto play</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">High quality photo</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 transition"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
            </label>
          </div>
        </section>

        <hr className="my-4 border-gray-200" />

        {/* Footer actions */}
        <footer className="flex justify-between items-center">
          <button className="text-sm text-gray-500 hover:underline">
            Reset to default
          </button>
          <div className="space-x-2">
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
              Save Preferences
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
