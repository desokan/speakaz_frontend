import SpeakersListComponent from "../components/reusables/SpeakersListComponent";
import Pagination from "../components/reusables/Pagination";
import SelectDropDown from "../components/reusables/SelectDropDown";

const speakers = [
  {
    id: 1,
    name: "Dr. Mariam Adesokan",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
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
  {
    id: 5,
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 6,
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: 7,
    name: "Emma Dorsey",
    role: "Senior Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    bio: "Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.",
    twitterUrl: "#",
    linkedinUrl: "#",
  }
];

const topic = [
  { name: "country" },
  {
    filtered: [
      "Filter by topic",
      "Business",
      "Entertainment",
      "Politics",
      "Social Media",
      "Diversity & Equality",
    ],
  },
  { color: "" },
];

const country = [
  { name: "country" },
  {
    filtered: [
      "Filter by country",
      "Nigeria",
      "United Kingdom",
      "Unites States",
      "Canada",
    ],
  },
  { color: "" },
];

const speaker = [
  { name: "speaker" },
  {
    filtered: [
      "Filter by speaker",
      "Keynote Speakers",
      "Workshop",
      "Motivational",
      "Comedians",
    ],
  },
  { color: "" },
];

const sort = [
  { name: "sort" },
  {
    filtered: ["Sort by", "Gender", "Ascending (A-Z)", "Descending (Z-A)"],
  },
  { color: "bg-gray-700 text-white" },
];

const SpeakersList = () => {
  return (
    <div className="bg-white py-24 md:py-16 lg:py-36 pb-0 mb-20">
      {/* Filter */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border border-gray-400 rounded-md mb-8 lg:py-8 py-8 md:my-6">
          <div className="mx-4 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            <SelectDropDown options={topic} />
            <SelectDropDown options={country} />
            <SelectDropDown options={speaker} />
            <SelectDropDown options={sort} />
          </div>
        </div>
      </div>

      {/* List of Speakers */}
      <SpeakersListComponent speakers={speakers} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default SpeakersList;
