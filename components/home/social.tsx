import { Mail, FolderOpen, Github, Globe, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Social() {
    return (

        <div className=" py-4">
            <div className="flex flex-col md:flex-row">


                {/* View Projects Section */}
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="text-gray-300 hover:text-black transition-colors" asChild>
                        <a href="#projects" className="flex items-center gap-2">
                            <FolderOpen className="w-4 h-4" />
                            <span className="text-sm font-medium">Download Resume</span>
                        </a>
                    </Button>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black transition-colors p-2" asChild>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                        </a>
                    </Button>

                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black transition-colors p-2" asChild>
                        <a href="https://osami.io" target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4" />
                        </a>
                    </Button>

                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black transition-colors p-2" asChild>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" />
                        </a>
                    </Button>

                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-black transition-colors p-2" asChild>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </Button>
                </div>
            </div>
        </div>

    )
}
