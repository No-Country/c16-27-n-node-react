import Image from 'next/image';
import Link from 'next/link';

export const CardTeam = ({ name, role, profile_picture, github, linkedin }) => {
  return (
    <section className=" flex flex-col w-60 items-center">
      <Image
        src={profile_picture}
        width={200}
        height={200}
        alt={name}
        className="rounded-md"
      />
      <div className="text-center m-2">
        <h3 className="font-bold text-black">{name}</h3>
        <span className="text-black">{role}</span>
      </div>

      <div className="flex gap-4">
        <Link href={linkedin} target="_blank" rel="noopener noreferrer">
          <Image
            src={'/icons/linkedin.svg'}
            width={20}
            height={20}
            alt="linkedin icon"
          />
        </Link>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          <Image
            src={'/icons/github.svg'}
            width={20}
            height={20}
            alt="github icon"
          />
        </Link>
      </div>
    </section>
  );
};
