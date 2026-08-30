import { Button } from "@base-ui/react"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-5xl mx-auto flex items-center justify-enevenly h-full">
                <Button size="lg" variant="ghost" className="w-full">Croatian</Button>
                <Button size="lg" variant="ghost" className="w-full">Spanish</Button>
                <Button size="lg" variant="ghost" className="w-full">French</Button>
                <Button size="lg" variant="ghost" className="w-full">Italian</Button>
                <Button size="lg" variant="ghost" className="w-full">Japanese</Button>
            </div>
        </footer>
    )
}