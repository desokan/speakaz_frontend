/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";

const SpeakersListComponent = ({ speakers }) => {
  
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <ul
        role="list"
        className="mx-auto mt-9 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
      >
        {speakers.map((speaker) => (
          <li key={speaker._id}>
            <Link to={`/speakers/${speaker._id}`}>
              <img
                className="aspect-[3/2] w-full rounded-lg object-cover"
                src={speaker.imageUrl}
                alt=""
              />
              <h3 className="mt-2 text-lg font-semibold leading-8 text-gray-900">
                {speaker.firstname}
              </h3>
            </Link>

            <p className="text-base leading-4 text-gray-600">{speaker.role}</p>
            <p className="mt-4 text-sm leading-6 text-gray-600">
              {`${speaker.biography.slice(0, 175)} ...`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeakersListComponent;
