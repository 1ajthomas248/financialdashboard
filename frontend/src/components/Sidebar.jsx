function Sidebar () {
    return (
        <aside className="w-64 h-screen bg-white p-4 shadow-md">
            <div className="mb-6 text-xl font-bold text-blue-400">
                FinSight
            </div>
            <nav>
                <ul className="space-y-2">
                    <li className="p-3 rounded-md hover:bg-gray-100 cursor-pointer font-medium text-gray-700">Dashboard</li>
                    <li className="p-3 rounded-md hover:bg-gray-100 cursor-pointer font-medium text-gray-700">Accounts</li>
                    <li className="p-3 rounded-md hover:bg-gray-100 cursor-pointer font-medium text-gray-700">Cards</li>
                    <li className="p-3 rounded-md hover:bg-gray-100 cursor-pointer font-medium text-gray-700">Transactions</li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;