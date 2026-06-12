function Section() {
  return (
    <section className="s1" 
      style={{
        backgroundImage:
          'url("https://img.magnific.com/free-vector/digital-health-medical-research-background-with-heartbeat-line_1017-50392.jpg?semt=ais_hybrid&w=740&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "80vh",
      }}
    >
      <div>
        <h1>Mr. Doctor</h1>
        <p>Find your doctors for your problems.</p>
      </div>
    </section>
  );
}

export default Section;