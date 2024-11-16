import Link from "next/link";
const footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Aurelect Advisors
            </h3>
            <p className="text-gray-400">
              Empowering businesses through comprehensive financial, business
              advisory, and technology-enabled services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <p className="text-gray-400 mb-4">
              123 Financial Street
              <br />
              Business City, BZ 12345
            </p>
            <p className="text-gray-400">contact@aurelectadvisory.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aurelect Advisors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { footer };
