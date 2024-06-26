const useTruncate = () => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + ".....";
    }
    return text;
  };

  return [truncateText];
};

export default useTruncate;
