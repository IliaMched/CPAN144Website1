import React, { useState } from "react";

export default function InteractiveComponent() {
  // State for toggling visibility
  const [isVisible, setIsVisible] = useState(false);

  // State for form submission
  const [inputValue, setInputValue] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // State for conditional rendering
  const [filter, setFilter] = useState("active");

  const items = [
    { id: 1, name: "Item 1", status: "active" },
    { id: 2, name: "Item 2", status: "inactive" },
    { id: 3, name: "Item 3", status: "active" },
    { id: 4, name: "Item 4", status: "inactive" },
  ];

  const filteredItems = items.filter((item) => item.status === filter);

  // Form submission handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setFormMessage("Input cannot be empty!");
    } else {
      setFormMessage("Form submitted successfully!");
      setInputValue("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Toggle Visibility */}
      <h1>Show/Hide Tool</h1>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This was the hidden content</p>}

      {/* Form Submission */}
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h1>Submission Tool</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>
      {formMessage && <p>{formMessage}</p>}

      {/* Conditional Rendering */}
      <div style={{ marginTop: "20px" }}>
        <h1>Active/Inactive handling</h1>
        <button onClick={() => setFilter("active")}>Show Active</button>
        <button onClick={() => setFilter("inactive")}>Show Inactive</button>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>

      {/* Hover Interaction */}
      <h1>Hover Mouse Effects</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
  <div style={{
      padding: "10px",
      backgroundColor: "lightgray",
      width: "200px",
      textAlign: "center",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "gray")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = "lightgray")}
  >
    Hover over me!
  </div>
</div>

    </div>
  );
}
