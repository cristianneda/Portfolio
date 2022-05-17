import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Example() {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md transition duration-200 ease-in-out bg-black bg-opacity-0 px-4 py-2 text-sm font-medium text-white hover:text-lime-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            PROJECTS
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-30 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-30 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-4 w-max origin-top-left rounded-l-lg  bg-gray-900 bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "transition duration-200 ease-in-out bg-lime-700 text-white"
                        : "text-lime-500"
                    } group flex w-full items-center rounded-tl-lg px-2 py-2 text-sm`}
                    onClick={() =>
                      window.open(
                        "https://cristianneda.github.io/subscriber-gitlab/",
                        "_blank"
                      )
                    }
                  >
                    Subscriber
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "transition duration-200 ease-in-out bg-lime-700 text-white"
                        : "text-lime-500"
                    } group flex w-full items-center  px-2 py-2 text-sm`}
                    onClick={() =>
                      window.open(
                        "https://cristianneda.github.io/Simple-Background-Generator/",
                        "_blank"
                      )
                    }
                  >
                    Background Generator
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "transition duration-200 ease-in-out bg-lime-700 text-white"
                        : "text-lime-500"
                    } group flex w-full items-center rounded-bl-lg px-2 py-2 text-sm`}
                    onClick={() =>
                      window.open(
                        "https://cristianneda.github.io/redux/",
                        "_blank"
                      )
                    }
                  >
                    Basic Todo
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
