

import React from 'react';
import './Projects.css';

const projectsData = [
  {
    name: "Twinfusion Innovations",
    techStack: "Fastapi, ReactJS, Prophet Model, ARIMAX, LSTM",
    description: "Created a live digital twin for power projects, implemented forecasting models, and built the frontend using ReactJS.",
    image: "solarpanel.jpg", // Updated image path
    id: "twinfusion",
  },
  {
    name: "Cogni Memora-Ally",
    techStack: "Transformers, Streamlit, PyAudio, LangChain",
    description: "Developed a memory-based conversational ChatBot for Alzheimer’s and Dementia patients, enhancing conversational abilities.",
    image: "cogni.jpg", // Updated image path
    id: "cogni-memora",
  },
  {
    name: "Assessing Disaster Damage",
    techStack: "Tensorflow, Keras, Pandas, Numpy",
    description: "Developed a machine learning solution for precise flood damage assessment, offering a valuable resource for disaster recovery.",
    image: "flood.jpg", // Updated image path
    id: "disaster-assessment",
  },
  {
    name: "Sawaar-E",
    techStack: "Flutter, Google Maps API",
    description: "Designed an app for connecting e-rickshaw drivers and passengers, aiming for cost and time-efficient transport.",
    image: "rick.jpg", // Updated image path
    id: "sawaar-e",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container projects-section">
      <h2>Projects</h2>

      <div className="projects-container">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={`Images/${project.image}`} alt={project.name} />
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

