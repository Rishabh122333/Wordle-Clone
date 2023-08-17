import React from "react";

const PlayAgainButton = () => {
  const handlePlayAgain = () => {
    window.location.reload(); // Reload the page to start a new game
  };

  return (
    <div className="play-again-button">
      <button onClick={handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default PlayAgainButton;
