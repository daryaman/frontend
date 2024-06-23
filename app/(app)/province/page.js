'use client'

import Header from '@/app/(app)/Header'
import axios from '@/lib/axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8000/api/province';

const Province = () => {

	// At the beginning, posts is an empty array
	const [posts, setPosts] = useState([]);

	// Define the function that fetches the data from API
	const fetchData = async () => {
		const { data } = await axios.get(API_URL);
		setPosts(data);
	};

	// Trigger the fetchData after the initial render by using the useEffect hook
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<Header title="Dashboard" />
			<div className="py-12">
				<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
					<div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
						<div className="p-6 bg-white border-b border-gray-200">
							<table className='w-full'>
								<tr className='border-b-4'>
									<th className='py-2'>ID</th>
									<th className='py-2'>NAME</th>
								</tr>
								{posts.map((province) => {
									return (
										<tr key={province.id} className='border-b-[1px]'>
											<td className='px-2 text-center'>{province.id}</td>
											<td className='px-2'>{province.name}</td>
										</tr>
									);
								})}
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Province