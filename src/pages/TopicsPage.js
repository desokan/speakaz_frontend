/* eslint-disable jsx-a11y/no-redundant-roles */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch("http://localhost:4000/topics", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        if (response.status === 200) {
          const receivedData = await response.json();
          const topicsExtract = receivedData.data.topics;
          console.log("topicsExtract", topicsExtract);
          setTopics(topicsExtract);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTopics();
  }, []);

  const topicsArrayData = topics.map((topic) => (
    <li key={topic._id}>
      <Link to={"#"}>
        <img
          className="mx-auto rounded-md h-36 w-full object-cover"
          src={topic.imageUrl}
          alt=""
        />
        <h3 className="mt-2 mb-2 text-base font-semibold leading-5 tracking-tight text-gray-900">
          {topic.name}
        </h3>
      </Link>
    </li>
  ));

  const noTopicsToDisplay = (
    <h2 className="font-bold text-indigo-800">No topics to display.</h2>
  );

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-md mt-8 -mb-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl">
            SPEAKING TOPICS
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto my-10 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {topics.length >= 1 ? topicsArrayData : noTopicsToDisplay}
        </ul>
      </div>
    </div>
  );
};

export default TopicsPage;
