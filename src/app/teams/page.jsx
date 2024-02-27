import { CardTeam } from '../ui/CardTeam';
import teams from '../content/perfil_team.json';

const page = () => {
  return (
    <section className="bg-black h-full pb-[7%] flex flex-col items-center">
      <h2 className="text-white text-center text-4xl m-12 font-bold">
        Conoce a nuestro equipo
      </h2>

      <div className="w-[70%] flex flex-wrap justify-center gap-10">
        {teams.map((team) => (
          <CardTeam {...team} key={team.github} />
        ))}
      </div>
    </section>
  );
};

export default page;
