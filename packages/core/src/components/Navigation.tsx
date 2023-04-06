import React from "react";

interface NavTitleProps {
  text: string;
}

const NavTitle = ({ text }: NavTitleProps) => (
  <h2 className="md:min-w-full text-gray-600 text-sm uppercase font-bold block mt-4 mb-2 no-underline">
    {text}
  </h2>
);

interface LinkGroupProps {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const LinkGroup = ({ title, children, className = "" }: LinkGroupProps) => (
  <div className={className}>
    <NavTitle text={title} />
    <ul className="md:flex-col md:min-w-full flex flex-col list-none">
      {React.Children.map(children, (child) => (
        <li className="mb-2">{child}</li>
      ))}
    </ul>
  </div>
);

export { LinkGroup };
