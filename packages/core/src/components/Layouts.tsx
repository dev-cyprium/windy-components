import React from "react";

interface LayoutContentProps {
  title: string;
  children?: React.ReactNode;
}

function parse(fullName: string) {
  const [firstName, lastName] = fullName.split(" ");
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}

export const LayoutContent = ({ title, children }: LayoutContentProps) => (
  <div className="md:ml-64 min-h-screen flex flex-col">
    <div className="bg-gray-800 h-64">
      <div className="flex py-2 items-center relative px-4 md:px-10">
        <h1 className="hidden md:block text-gray-100 text-sm uppercase font-semibold">
          {title}
        </h1>

        {/* <button
          onClick={() => setVisible(true)}
          className="md:hidden rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none"
        >
          <span className="sr-only">Open Menu</span>
          <svg
            className="h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        <div className="ml-auto flex items-center">
          <span className="font-bold w-10 h-10 rounded-full bg-gray-100 text-gray-800 flex justify-center items-center">
            {parse("Stefan Kupresak")}
          </span>
        </div>

        <div className="md:hidden">
          {/* <MobileNavbar
            isVisible={isVisible}
            onClose={() => setVisible(false)}
          /> */}
        </div>
      </div>
    </div>

    <div className="bg-gray-200 flex-1">
      <div className="w-full px-4 md:px-10">
        {/* <FullSiteFade duration={0.3}>{children}</FullSiteFade> */}
        {children ? children : null}
      </div>
    </div>
  </div>
);

interface LayoutProps {
  title: string;
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => (
  <>
    <nav className="relative">
      <div className="fixed hidden md:flex flex-col md:inset-0 md:w-64 bg-white py-4 px-6 overflow-y-auto">
        {props.sidebar ? props.sidebar : null}
      </div>
    </nav>

    <LayoutContent title={props.title}>
      {props.children ? props.children : null}
    </LayoutContent>
  </>
);
