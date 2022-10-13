import Button from "./Buttons";

function App() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-start gap-4 items-center overflow-hidden bg-gray-900 py-6 sm:py-24">
        <div className="">
          <Button func="{{ ()=>print() }}}"></Button>
        </div>
        <div className="relative bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-5xl sm:rounded-lg ">
          <div className="mx-auto gap-2 grid grid-cols-3">
            <div className="p-4 pl-6 bg-slate-100 rounded-lg col-span-1">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Customizing your
                      <code className="text-sm font-bold text-gray-900">
                        tailwind.config.js
                      </code>{" "}
                      file
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Extracting classNamees with
                      <code className="text-sm font-bold text-gray-900">
                        @apply
                      </code>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">
                  Want to dig deeper into Tailwind?
                </p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Customizing your
                      <code className="text-sm font-bold text-gray-900">
                        tailwind.config.js
                      </code>{" "}
                      file
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">
                      Extracting classNamees with
                      <code className="text-sm font-bold text-gray-900">
                        @apply
                      </code>
                    </p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p className="ml-4">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div className="pt-8 text-base font-semibold leading-7">
                <p className="text-gray-900">
                  Want to dig deeper into Tailwind?
                </p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-sky-500 hover:text-sky-600"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
