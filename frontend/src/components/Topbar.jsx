function Topbar () {

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    });

    return (
        <header className="h-16 w-full bg-white shadow px-6 flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <div className="text-lg font-semibold">Hey, AJ</div>
                <div className="text-sm text-gray-500">{today}</div>
            </div>
        </header>
    )
}

export default Topbar;