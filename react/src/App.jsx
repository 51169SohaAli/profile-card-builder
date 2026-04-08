import { useState } from "react";
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    bio: "",
    color: "#020104",
    skills: [],
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData(prev => {
        const skills = prev.skills.includes(value)
          ? prev.skills.filter(s => s !== value)
          : [...prev.skills, value];
        return { ...prev, skills };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <fieldset className="fieldset-container">
        <legend className="card-title">Profile Card Builder</legend>
      <form onSubmit={handleSubmit} className="form-container">
       <div className="form-group">
        <label>Full Name</label>
          <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
        />
       </div>

       <div className="form-group">
         <label>Job Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Job Title"
          required
        />
       </div>

       <div className="form-group">
          <label>Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Enter Bio"
          required
        />

       </div>
       <div className="form-group">
         <label>Avatar Color</label>
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
       </div>
       <label>Skills</label>
    <div className="skill-item">
        {["HTML","CSS","JavaScript","React"].map(skill => (
          <label key={skill}>
            <input
              type="checkbox"
              name="skills"
              value={skill}
              checked={formData.skills.includes(skill)}
              onChange={handleChange}
            />
            {skill}
          </label>
        ))}
    </div>
        <button type="submit">Generate Card</button>
      </form>
</fieldset>
      {submittedData && <ProfileCard {...submittedData} />}
    </div>
  );
}

export default App;