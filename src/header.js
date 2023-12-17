

function Header(){
    return (
        <>
  <div style={{ display: "flex", alignItems: "center", gap: 50 }}>
    <h1 style={{ color: "#991f48" }}>Family Wellness</h1>
    <p
      style={{
        color: "white",
        backgroundColor: "black",
        padding: 10,
        borderRadius: 50,
        display: "flex",
        alignItems: "center"
      }}
    >
      Open With{" "}
      <span className="material-symbols-outlined">arrow_drop_down</span>
    </p>
  </div>
  <p>MESSAGE THERAPY</p>
  <div style={{ display: "flex" }}>
    <span className="links" style={{ backgroundColor: "#991f48" }}>
      HOME
    </span>
    <span className="links">ABOUT</span>
    <span className="links">SERVICES</span>
    <span className="links">FAQ</span>
    <span className="links">CONTACT</span>
  </div>
</>

    );
}

export default Header;