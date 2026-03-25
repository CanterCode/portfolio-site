import { Link } from "react-router-dom";

interface NavButtonProps {
  label: string;
  to: string;
}

const NavButton = ({ label, to }: NavButtonProps) => {
  return (
    <Link
      className="bg-primary hover:bg-primary-hover !text-white no-underline shadow-md px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-2"
      to={to}
    >
      {label}
    </Link>
  );
};

export default NavButton;
