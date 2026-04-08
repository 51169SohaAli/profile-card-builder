function ProfileCard({ name, title, bio, color, skills }) {
  return (
    <div className="card" id="card">
      <h2>Card Preview</h2>
      <div className="avatar-circle" style={{ background: color }}></div>
      <h2>{name || "Your Name"}</h2>
      <p>{title || "Your Job Title"}</p>
      <div className="bio-text">{bio || "Your Bio"}</div>
      <div className="skills-container">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;