const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white rounded-lg">
      <div className="container py-4 text-center">
        <span className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Sepatu.com. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
