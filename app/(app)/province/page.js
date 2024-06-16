import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Laravel - Province',
}

const api_url = 'http://localhost:8000/api/province';

const Dashboard = () => {
    
    const getClear = async () => {
        try {
            const response = await fetch(api_url, {cache:"no-store"});
            const provinces = response.json();
            return ('OK');
        } catch (error) {
            return ('SIAL');
        }
    }

    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Location BROOOOOO!
                            <br/>
                            <getClear />
                            {provinces[0].name}
                            <table>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                </tr>
                                {/* {provinces.map((province) => {
                                    return (
                                    <tr key={province.id}>
                                        <td>{province.id}</td>
                                        <td>{province.name}</td>
                                    </tr>
                                    );
                                })} */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard