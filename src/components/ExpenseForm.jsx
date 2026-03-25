import React, { useState } from 'react'

const ExpenseForm = () => {
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");

    return (
        <div className='w-full flex items-center justify-center min-h-screen bg-gray-100'>
            
            {/* Card */}
            <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
                
                <h2 className='text-xl font-bold mb-4 text-center'>
                    Add Transaction
                </h2>

                <form className='flex flex-col gap-4'>

                    {/* Amount */}
                    <div>
                        <label className='block mb-1 font-medium'>Amount</label>
                        <input
                            type="number"
                            className='w-full p-2 border rounded'
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className='block mb-1 font-medium'>Category</label>
                        <select
                            className='w-full p-2 border rounded'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">Select Category</option>
                            <option value="Food">Food</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Entertainment">Entertainment</option>
                        </select>
                    </div>

                    {/* Type */}
                    <div>
                        <label className='block mb-1 font-medium'>Type</label>
                        <select
                            className='w-full p-2 border rounded'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="">Select Type</option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div>
                        <label className='block mb-1 font-medium'>Date</label>
                        <input
                            type="date"
                            className='w-full p-2 border rounded'
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    {/* Button */}
                    <button
                        className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
                    >
                        Add Transaction
                    </button>

                </form>
            </div>
        </div>
    )
}

export default ExpenseForm