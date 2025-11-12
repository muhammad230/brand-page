const Navigation = ({ toggle }) => {
  return (
    <nav>
      <div className="logo">
        <img src="../images/brand_logo (1).png" alt="logo" />
      </div>
      <ul>
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <button onClick={toggle}>Login</button>
    </nav>
  );
};

export default Navigation;
