export default function AnimatedLogo() {
  return (
    <div className="animated-logo" aria-hidden="true">
      <div className="shape square" style={{ background: "rgba(119,116,255,0.18)", border: "1.5px solid rgba(119,116,255,0.5)" }} />
      <div className="shape circle" style={{ borderColor: "#7774FF" }} />
      <div className="shape semicircle" style={{ background: "#DDB7F0" }} />
      <div className="shape dot" style={{ background: "#E2F163", boxShadow: "0 0 12px rgba(226,241,99,0.6)" }} />
    </div>
  )
}
