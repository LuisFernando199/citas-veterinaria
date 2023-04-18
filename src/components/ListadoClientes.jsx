import Paciente from "./Paciente";


function ListadoClientes({ pacientes, setPaciente, eliminarPaciente}) {


  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Clientes</h2>
          <p className="text-lg mt-5 text-center mb-9">
            Administra tus {""}
            <span className="text-indigo-500 font-bold">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            paciente={paciente} 
            key={paciente.id} 
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-9">
            Agrega un nuevo {""}
            <span className="text-indigo-500 font-bold">
              Paciente y su cita
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoClientes;
