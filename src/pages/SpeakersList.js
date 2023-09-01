import { useEffect, useState } from "react";
import SpeakersListComponent from "../components/reusables/SpeakersListComponent";
import Pagination from "../components/reusables/Pagination";
import SelectDropDown from "../components/reusables/SelectDropDown";

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
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch("http://localhost:4000/speakers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        if (response.status === 200) {
          const receivedData = await response.json();
          setSpeakers(receivedData.data.speakers);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSpeakers();
  }, []);

  return (
    <div className="bg-white py-24 md:py-16 lg:py-36 pb-0 mb-20">
      {/* Filter */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* change md:mb-6 to md:my-6 */}
        <div className="border border-gray-400 rounded-md mb-8 lg:py-8 py-8 md:mb-6">
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
