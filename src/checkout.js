import { useSelector } from "react-redux";

export default function Checkout() {
    const items = useSelector((state) => state.cartslice.items);

    return (
        <div className="container mx-auto max-w-2xl mt-10 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" />
                </svg>
                Cart <span className="ml-2 text-xl text-orange-700">({items.length} items)</span>
            </h2>
            <ul className="divide-y divide-orange-100">
                {items.length === 0 && (
                    <li className="py-6 text-gray-500 text-xl text-center">Your cart is empty.</li>
                )}
                {items.map((item, idx) => (
                    <li key={item.id || idx} className="flex justify-between items-center py-4">
                        <span className="font-semibold text-lg text-gray-800">{item.name}</span>
                        <span className="text-orange-600 font-bold text-lg">x{item.count || 1}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}