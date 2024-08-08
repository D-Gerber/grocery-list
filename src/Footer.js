const Footer = ({ length }) => {
  return (
    <footer>
      {/* This expression (line of code below) removes the letter s from the word Item when there is only 1 item on the list. It is for better punctuality. */}
      <p>
        {length} List {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
};

export default Footer;
