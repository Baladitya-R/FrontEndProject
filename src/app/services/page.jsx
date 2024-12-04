"use client";
import Footer from "@/components/footer";
import React, { useState } from "react";

const servicesData = [
  {
    title: "General Consultation",
    description: "Routine health check-ups and medical advice.",
  },
  {
    title: "Pediatrics",
    description: "Healthcare services for infants, children, and adolescents.",
  },
  {
    title: "Cardiology",
    description: "Specialized care for heart-related conditions.",
  },
  {
    title: "Orthopedics",
    description: "Treatment for bone, joint, and muscle disorders.",
  },
  {
    title: "Radiology",
    description: "Imaging services like X-rays, MRIs, and CT scans.",
  },
  {
    title: "Dermatology",
    description: "Diagnosis and treatment of skin conditions.",
  },
  {
    title: "Gynecology",
    description: "Women's health, including reproductive care.",
  },
  {
    title: "Oncology",
    description: "Comprehensive cancer care and treatments.",
  },
  {
    title: "Neurology",
    description: "Treatment of brain and nervous system disorders.",
  },
  {
    title: "Emergency Services",
    description: "24/7 urgent medical care for critical conditions.",
  },
  {
    title: "Physical Therapy",
    description: "Rehabilitation and therapy for physical recovery.",
  },
  { title: "Pharmacy", description: "Dispensing prescribed medications." },
  {
    title: "Lab Testing",
    description: "Diagnostic blood tests and lab analyses.",
  },
  {
    title: "Surgery",
    description: "General and specialized surgical procedures.",
  },
  {
    title: "Mental Health Services",
    description: "Counseling and psychiatric support.",
  },
  {
    title: "Nutrition and Dietetics",
    description: "Diet planning and nutrition counseling.",
  },
  {
    title: "Anesthesiology",
    description: "Pain management during surgeries and procedures.",
  },
  {
    title: "Urology",
    description: "Treatment for urinary tract and male reproductive issues.",
  },
  {
    title: "Ophthalmology",
    description: "Eye care and vision correction services.",
  },
  {
    title: "ENT Services",
    description: "Treatment for ear, nose, and throat disorders.",
  },
];

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered services based on the search term
  const filteredServices = servicesData.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-5">
      <h1 className="px-5 text-2xl font-medium">Hospital Services</h1>
      <div className="px-5">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            width: "40%",
            marginBottom: "20px",
            fontSize: "16px",
          }}
          className="px-5 rounded"
        />
      </div>

      <ul style={{ listStyle: "none", padding: 0 }} className="mx-5">
        {filteredServices.map((service, index) => (
          <li
            key={index}
            style={{ marginBottom: "15px" }}
            className="px-3 py-5 rounded bg-white"
          >
            <h3 className="text-2xl font-medium">{service.title}</h3>
            <p>{service.description}</p>
            <hr />
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
}
