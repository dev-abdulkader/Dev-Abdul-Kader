import { Mail, FolderOpen, Github, Globe, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Social() {
    return (

        <div className="flex flex-col md:flex-row">


            {/* View Projects Section */}
            <div className="flex items-center gap-3 mr-5">
                <Button variant="ghost" size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" asChild>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1rhs0LGUbo5gh8FRxpgraW7XHH6Zb1cko"
                        download
                        className="flex items-center gap-2"
                    >
                        <FolderOpen className="w-4 h-4" />
                        <span className="text-sm font-medium">Download Resume</span>
                    </a>

                </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="hover:text-white transition-colors p-2" asChild>
                    <a href="https://github.com/dev-abdulkader" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                    </a>
                </Button>

                <Button variant="ghost" size="sm" className="text-black bg-white hover:text-white transition-colors p-2" asChild>
                    <a href="https://www.linkedin.com/in/md-abdul-kader-852871202/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                    </a>
                </Button>
            </div>
        </div>

    )
}
