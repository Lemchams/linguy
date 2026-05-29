import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[20ppx]">
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="primaryOutline">Primary Outiline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondaryOutline">Secondary Outiline</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dangerOutline">Danger Outiline</Button>
            <Button variant="super">Super</Button>
            <Button variant="superOutline">Super Outiline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="sidebar">Sidebar</Button>
            <Button variant="sidebarOutline">Sidebar Outiline</Button>
        </div>
    )
}

export default ButtonsPage