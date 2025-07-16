import { useState } from "react";

const VoteButton = () => {
  const [votes, setVotes] = useState(0);

  return (
    <button
      onClick={() => setVotes(votes + 1)}
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
    >
      👍 {votes}
    </button>
  );
};

export default VoteButton;
