import 'react-querybuilder/dist/query-builder.css';

import { Button } from '@ui-components';
import { QueryBuilder } from 'react-querybuilder';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

function Dashboard() {
  const { logout } = useAuth();
  const grids = localStorage.getItem('user');
  const cubes = JSON.parse(grids).cubes;
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <nav className="py-4 px-2 bg-gray-800 text-gray-100">
        <div className="container mx-auto flex space-x-12 justify-between items-center">
          <div className="font-bold uppercase text-lg">Brand</div>
          <button
            onClick={onLogout}
            className=" border-solid border-gray-50 border-2 p-2 px-4 rounded-full hover:bg-white hover:text-gray-950 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>
      <QueryBuilder />
      <section className="bg-grey-lightest py-2">
        <div className="w-full max-w-2xl ml-auto mr-auto mt-8">
          <div className="flex flex-wrap -mx-6 -my-6">
            {cubes?.length &&
              cubes.map(({ id, name }: { id: string; name: string }) => (
                <div key={id} className="w-full lg:w-1/2 px-6 py-6 text-center">
                  <div className="bg-white rounded shadow-lg overflow-hidden p-8">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-grey-darker text-base mb-4">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s
                    </p>
                    <Button
                      text="Open board"
                      onClick={() => navigate('/dashboard/boards/csr')}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
