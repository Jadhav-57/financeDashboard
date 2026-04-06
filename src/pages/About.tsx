export default function About() {
  return (
    <div className="min-h-[90vh] px-6 md:px-16 py-12 bg-gray-50">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-500">About Me</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Passionate about building intuitive and impactful web applications that solve real-world problems.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - TEXT */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Hi, I'm Aditya 👋
          </h2>

          <p className="text-gray-600 leading-relaxed">
            I am an aspiring Full Stack Developer specializing in the MERN stack. 
            I enjoy building clean, responsive, and user-friendly interfaces with a focus on performance and usability.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I have worked on projects like a <span className="text-red-500 font-medium">Smart Event Booking System for Disabled Visitors</span>, 
            where I focused on accessibility features such as voice support, category-based assistance (blind, deaf, etc.), 
            and seamless booking experiences.
          </p>

          <p className="text-gray-600 leading-relaxed">
            I am also exploring data-driven applications like <span className="text-red-500 font-medium">finance dashboards</span> 
            and <span className="text-red-500 font-medium">prediction systems</span>, combining UI/UX with meaningful insights.
          </p>

          {/* SKILLS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "MongoDB", "Express", "Tailwind", "JavaScript"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-red-100 text-red-500 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - CARD UI */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              What I Focus On
            </h3>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>• Clean and modern UI design</li>
              <li>• Responsive and accessible interfaces</li>
              <li>• Real-world problem solving</li>
              <li>• Data visualization and dashboards</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Current Goal
            </h3>
            <p className="text-gray-600 mt-2">
              To build impactful full-stack applications and gain experience working on real-world scalable systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Tech Interests
            </h3>
            <p className="text-gray-600 mt-2">
              Frontend Engineering, UI/UX Design, Data Visualization, and AI-powered applications.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}