const SubHeading = ({ text, addOn }) => {
  return (
    <div editable="rich">
      <p className={`lead ${addOn}`}>{text}</p>
    </div>
  );
};

export default SubHeading;
