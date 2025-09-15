import React from 'react';

const DesktopNavbar = () => {
    return (
        <div className="hidden lg:flex items-center space-x-4 border w-fit">
            {["HOME", "PROFESSIONAL EXPERIENCE", "PROJECTS", "BLOG", "CONTACT ME"].map(
                (link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="text-white hover:text-gray-300 transition duration-300"
                    >
                        {link}
                    </a>
                )
            )}
        </div>
    );
};

export default DesktopNavbar;