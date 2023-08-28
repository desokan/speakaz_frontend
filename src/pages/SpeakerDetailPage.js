/* eslint-disable jsx-a11y/no-redundant-roles */
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import SpeakersListComponent from "../components/reusables/SpeakersListComponent";

const actions = [
  {
    title: "Awards and Recognition",
    content:
      "1. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae. Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.",
  },
  {
    title: "Publication",
    content:
      "Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.",
  },
  {
    title: "Languages Spoken",
    content:
      "3. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis.",
  },
  {
    title: "Travel and Accommodation",
    content:
      "4. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
  {
    title: "Availability for Virtual Events",
    content:
      "5. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
  {
    title: "Topics & Expertise",
    content:
      "6. Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.",
  },
];

const speakers = [
  {
    id: 1,
    name: "Dr. Mariam Adesokan",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=512&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem .",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 2,
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 3,
    name: "Dr. Rasheed Adesokan",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Dr. Rasheed Adesokan is a seasoned Senior Developer with a strong background in software engineering. He has a wealth of experience.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 4,
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SpeakerDetailPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="bg-white px-6 py-8 lg:px-8 lg:py-20">
        <div className="bg-white px-6 py-2 lg:px-8">
          <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
            {/* Banner */}
            <figure className="mt-16 mb-12">
              <img
                className="aspect-[4/2] rounded-md bg-gray-50 object-cover"
                src={speakers[0].imageUrl}
                alt=""
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                Faucibus commodo massa rhoncus, volutpat.
              </figcaption>
            </figure>

            {/* Contact Speaker */}
            <div className="bg-white shadow sm:rounded-lg border mb-12 border-gray-400">
              <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold leading-6 text-gray-900">
                      <span className="font-bold">Meet: </span> Dr. Rasheed
                      Adesokan
                    </h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Recusandae voluptatibus corrupti atque repudiandae nam.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Request Speaker Fees & Availability
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Bio
              </h1>
              <p className="mt-6 text-xl leading-8">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien. Aliquet nec
                orci mattis amet quisque ullamcorper neque, nibh sem.
              </p>

              <p className="mt-6 text-xl leading-8">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>

              <p className="mt-6 text-xl leading-8">
                Purus morbi dignissim senectus mattis adipiscing. Amet, massa
                quam varius orci dapibus volutpat cras. In amet eu ridiculus leo
                sodales cursus tristique. Tincidunt sed tempus ut viverra
                ridiculus non molestie. Gravida quis fringilla amet eget dui
                tempor dignissim. Facilisis auctor venenatis varius nunc, congue
                erat ac. Cras fermentum convallis quam.
              </p>
              <p className="mt-6 text-xl leading-8">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien. Aliquet nec
                orci mattis amet quisque ullamcorper neque, nibh sem.
              </p>
            </div>

            {/* Highlights */}
            <div className="divide-y divide-gray-200 overflow-hidden rounded-md bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 border border-gray-300 my-12">
              {actions.map((action, actionIdx) => (
                <div
                  key={action.title}
                  className={classNames(
                    actionIdx === 0
                      ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                      : "",
                    actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                    actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                    actionIdx === actions.length - 1
                      ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                      : "",
                    "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                  )}
                >
                  <div className="mt-2">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
                      {action.title}
                    </h3>
                    <p className="mt-2 text-gray-500">{action.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Similar Speakers */}
            <div className="bg-white py-24 md:py-16 lg:py-8 pb-0 rounded-md border border-gray-300 mt-20">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Similar Speakers
                  </h2>
                </div>
              </div>
              {/* List of Speakers */}
              <SpeakersListComponent speakers={speakers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerDetailPage;
